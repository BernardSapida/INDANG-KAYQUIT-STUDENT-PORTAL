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

        const {
            email,
            currentPassword,
            newPassword,
            confirmPassword
        } = req.body;

        // Current Password validation

        const data = await db.collection("teachers").updateOne(
            {
                "kayquitAccount.email": { $eq: email },
            },
            {
                $set: {
                    "kayquitAccount.password": newPassword
                }
            }
        );

        res.status(200).json(data);
    } catch (e) {
        console.error(e);
    }
}