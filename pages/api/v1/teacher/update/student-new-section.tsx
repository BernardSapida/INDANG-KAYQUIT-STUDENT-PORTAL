import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const client = await clientPromise;
        const db = client.db("student_portal");
        const { studentId, sectionId, grades } = req.body;

        const data = await db.collection("students").updateOne(
            { "_id": new ObjectId(studentId) },
            {
                $push: {
                    classes: {
                        section: new ObjectId(sectionId),
                        grades: grades
                    }
                }
            }
        );


        const sectionResponse = await db.collection("sections").updateOne(
            { "_id": new ObjectId(sectionId) },
            {
                $push: {
                    students: new ObjectId(studentId)
                }
            }
        );

        res.status(200).json(data);
    } catch (e) {
        console.error(e);
    }
}