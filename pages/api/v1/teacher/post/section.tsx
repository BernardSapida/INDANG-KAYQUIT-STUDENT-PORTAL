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

        const { gradeLevel, name, academicYear, subjects, grades } = req.body;

        const data = await db.collection("sections").insertOne({
            gradeLevel,
            name,
            academicYear,
            subjects,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        const sectionId = data.insertedId;
        console.log(sectionId)

        const student = await db.collection("students").updateMany(
            {
                $and: [
                    { "enrollmentDetails.currentGradeLevel": gradeLevel },
                    { "enrollmentDetails.currentSection": name },
                    { "enrollmentDetails.academicYear": academicYear },
                ]
            },
            [
                {
                    $set: {
                        newClass: {
                            section: sectionId,
                            grades: grades
                        }
                    }
                },
                {
                    $set: {
                        classes: { $concatArrays: ["$classes", ["$newClass"]] }
                    }
                },
                {
                    $unset: "newClass"
                },
                {
                    $replaceWith: "$$ROOT"
                }
            ]
        );
        console.log(student)

        res.json({ sectionId: sectionId });
    } catch (e) {
        console.error(e);
    }
}