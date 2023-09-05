import type { NextApiRequest, NextApiResponse } from "next";
import { createStudent } from "@/helpers/teacher/Students";
import { Student } from "@/types/global";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { studentInfo }: { studentInfo: Student } = req.body;
        const createStudentResponse = await createStudent(studentInfo);

        res.status(200).json(createStudentResponse);
    } catch (e) {
        console.error(e);
    }
}