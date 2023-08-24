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

        const { email } = req.body;

        const data = await db.collection("students").aggregate([
            {
                $unwind: "$classes"
            },
            {
                $lookup: {
                    from: "sections",
                    localField: "classes.section",
                    foreignField: "_id",
                    as: "classes.sectionDetails",
                },
            },
            {
                $unwind: "$classes.sectionDetails"
            },
            {
                $group: {
                    _id: "$_id",
                    personalDetails: { $first: "$personalDetails" },
                    enrollmentDetails: { $first: "$enrollmentDetails" },
                    contactDetails: { $first: "$contactDetails" },
                    kayquitAccount: { $first: "$kayquitAccount" },
                    createdAt: { $first: "$createdAt" },
                    updatedAt: { $first: "$updatedAt" },
                    classes: {
                        $push: {
                            section: "$classes.section",
                            sectionDetails: "$classes.sectionDetails",
                            grades: "$classes.grades"
                        }
                    }
                }
            },
            {
                $match: { "kayquitAccount.email": email }
            },
            {
                $project: {
                    _id: 0,
                    "classes": {
                        "grades": 1,
                        "sectionDetails": {
                            "gradeLevel": 1,
                            "name": 1,
                            "academicYear": 1
                        }
                    }
                },
            }
        ]).toArray();

        console.log(email);
        console.log(data);
        res.json(data[0].classes);
    } catch (e) {
        console.error(e);
    }
}