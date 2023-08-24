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

        const { gradeLevel, section, academicYear } = req.body;

        const data = await db.collection("announcements").findOne({
            gradeLevel,
            section,
            academicYear
        });

        res.json(data);
    } catch (e) {
        console.error(e);
    }
}