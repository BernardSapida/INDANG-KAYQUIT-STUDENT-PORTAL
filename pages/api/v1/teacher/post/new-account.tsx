import type { NextApiRequest, NextApiResponse } from "next";
import { createTeacher } from "@/helpers/teacher/Account";
import { Student, Teacher } from "@/types/global";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { teacherInfo }: { teacherInfo: Teacher } = req.body;
        const createStudentResponse = await createTeacher(teacherInfo);

        res.status(200).json(createStudentResponse);
    } catch (e) {
        console.error(e);
    }
}