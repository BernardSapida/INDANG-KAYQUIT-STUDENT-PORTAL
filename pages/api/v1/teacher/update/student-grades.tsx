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

        const { email, sectionId, grades } = req.body;

        console.log(email, sectionId, grades)

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
        // const data = await db.collection("students").find({}).skip(10).limit(10).toArray();
        console.log(data)
        res.json(data);
    } catch (e) {
        console.error(e);
    }
}