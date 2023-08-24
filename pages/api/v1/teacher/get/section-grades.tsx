import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import axios from "axios";
import { ObjectId } from "mongodb";

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

        const { gradeLevel, section, academicYear, sortBy, sortOrder } = req.body;

        const dataSection = await db.collection("sections").findOne({
            "gradeLevel": gradeLevel,
            "name": section,
            "academicYear": academicYear
        });

        const sectionId = dataSection?._id;
        console.log(sectionId);

        const data = await db.collection("students").aggregate([
            {
                $match: {
                    "classes.section": { $eq: new ObjectId(sectionId) },
                }
            },
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
                $addFields: {
                    "Fullname": "$personalDetails.fullname",
                    "Section": {
                        $concat: [
                            "$enrollmentDetails.currentGradeLevel",
                            " - ",
                            "$enrollmentDetails.currentSection"
                        ]
                    },
                    "Student LRN": "$enrollmentDetails.lrn",
                    "Student Number": "$enrollmentDetails.studentNumber",
                    "Email": "$kayquitAccount.email",
                }
            },
            {
                $project: {
                    _id: 0,
                    "Fullname": 1,
                    "Section": 1,
                    "Student LRN": 1,
                    "Student Number": 1,
                    "Email": 1,
                    "classes": {
                        $filter: {
                            input: "$classes",
                            as: "class",
                            cond: {
                                $and: [
                                    { $eq: ["$$class.sectionDetails.gradeLevel", gradeLevel] },
                                    { $eq: ["$$class.sectionDetails.name", section] },
                                    { $eq: ["$$class.sectionDetails.academicYear", academicYear] }
                                ]
                            }
                        },
                    },
                },
            },
            {
                $addFields: {
                    "grades": "$classes.grades",
                }
            },
            {
                $project: {
                    _id: 0,
                    "grades": 1,
                    "Fullname": 1,
                    "Section": 1,
                    "Student LRN": 1,
                    "Student Number": 1,
                    "Email": 1,
                },

            },
            {
                $sort: {
                    "Fullname": Number(sortOrder)
                }
            }
        ]).toArray();

        console.log(data)

        res.json(data);
    } catch (e) {
        console.error(e);
    }
}