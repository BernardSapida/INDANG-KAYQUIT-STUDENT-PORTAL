import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import axios from "axios";

type Data = {
  sucess: string;
  message: string;
  data: Array<number | string | Array<any>>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const { searchTerms } = req.body;
    let searchTerm = "";
    let category = ""; // Grades, PersonalInformation, 
    let searchQuery = {}

    if (searchTerm) {
      searchQuery = {
        $or: [
          { "personalDetails.fullname": { $regex: searchTerm, $options: "i" } },
          { "enrollmentDetails.lrn": { $regex: searchTerm, $options: "i" } },
          { "enrollmentDetails.studentNumber": { $regex: searchTerm, $options: "i" } },
          { "combinedGradeSection": { $regex: searchTerm, $options: "i" } }
        ]
      }
    }

    const data = await db.collection("students").aggregate([
      {
        $addFields: {
          combinedGradeSection: {
            $concat: [{ $toString: "$enrollmentDetails.currentGradeLevel" }, " - ", "$enrollmentDetails.currentSection"]
          }
        }
      },
      {
        $match: searchQuery
      },
      {
        $project: {
          _id: 1,
          "personalDetails": 1,
          "contactDetails": 1,
          "enrollmentDetails": 1,
          "kayquitAccount": 1,
          "class": 1,
        },
      }
    ]).toArray();

    res.json(data);
  } catch (e) {
    console.error(e);
  }
}