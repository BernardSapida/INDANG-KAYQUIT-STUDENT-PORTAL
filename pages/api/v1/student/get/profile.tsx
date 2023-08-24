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

        const { email } = req.body;

        const data = await db.collection("students").aggregate([
            {
                $match: { "kayquitAccount.email": email }
            },
            {
                $project: {
                    _id: 0,
                    "personalDetails": 1,
                    "enrollmentDetails": 1,
                    "contactDetails": 1,
                    "kayquitAccount": 1,
                }
            },
            {
                $limit: 1
            }
        ]).toArray();

        res.json(data);
    } catch (e) {
        console.error(e);
    }
}