import type { NextApiRequest, NextApiResponse } from "next";
import { postStudentInDatabase } from "@/helpers/teacher/Student";
import { Student } from "@/types/global";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { studentInfo }: { studentInfo: Student } = req.body;
        const addStudentResponse = await postStudentInDatabase(studentInfo);

        res.status(200).json({
            status: 200,
            isSuccess: true,
            data: addStudentResponse,
            message: "Student added successfully"
        });
    } catch (e) {
        console.error(e);
    }
}