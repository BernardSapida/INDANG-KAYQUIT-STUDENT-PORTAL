import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { gradeLevel, section, academicYear } = req.body;
        const client = await clientPromise;
        const db = client.db("student_portal");

        const data = await db.collection("sections").findOne({
            gradeLevel: gradeLevel,
            name: section,
            academicYear: academicYear
        });

        res.json(data);
    } catch (e) {
        console.error(e);
    }
}