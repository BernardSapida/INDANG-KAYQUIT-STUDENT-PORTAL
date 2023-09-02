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
        const { _id, studentInformation } = req.body;

        studentInformation._id = new ObjectId(_id);

        const data = await db.collection("students").updateOne(
            {
                "_id": new ObjectId(_id),
            },
            {
                $set: {
                    personalDetails: {
                        ...studentInformation.personalDetails
                    },
                    enrollmentDetails: {
                        ...studentInformation.enrollmentDetails
                    },
                    contactDetails: {
                        ...studentInformation.contactDetails
                    },
                    kayquitAccount: {
                        ...studentInformation.kayquitAccount
                    }
                }
            }
        );

        res.status(200).json(data);
    } catch (e) {
        console.error(e);
    }
}