import type { NextApiRequest, NextApiResponse } from "next";
import { updateStudentGrade } from "@/helpers/teacher/Students";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { email, sectionId, grades } = req.body;
        const response = await updateStudentGrade(email, sectionId, grades);

        res.status(response.status).json(response);
    } catch (e) {
        console.error(e);
    }
}