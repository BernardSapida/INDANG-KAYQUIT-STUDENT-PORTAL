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
        const { studentId, newSectionId, oldSectionId } = req.body;

        const data = await db.collection("students").updateOne(
            {
                "_id": new ObjectId(studentId),
                "classes.section": new ObjectId(oldSectionId)
            },
            {
                $set: {
                    "classes.$.section": new ObjectId(newSectionId)
                }
            }
        );

        res.status(200).json(data);
    } catch (e) {
        console.error(e);
    }
}