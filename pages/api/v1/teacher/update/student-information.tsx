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

        const { _id, studentInformation } = req.body;

        studentInformation._id = new ObjectId(_id);
        // console.log(studentInformation)
        console.log({
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
        })

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

        console.log(data)
        res.status(200).json(data);
    } catch (e) {
        console.error(e);
    }
}