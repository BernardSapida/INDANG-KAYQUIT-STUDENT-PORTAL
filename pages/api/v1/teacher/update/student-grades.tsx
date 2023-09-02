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
        const { email, sectionId, grades } = req.body;
        const data = await db.collection("students").updateOne(
            {
                "kayquitAccount.email": { $eq: email },
                "classes.section": { $eq: new ObjectId(sectionId) },
            },
            {
                $set: {
                    "classes.$.grades": grades
                }
            }
        );

        res.json(data);
    } catch (e) {
        console.error(e);
    }
}