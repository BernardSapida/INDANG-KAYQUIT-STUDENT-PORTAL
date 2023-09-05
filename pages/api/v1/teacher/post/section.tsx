import type { NextApiRequest, NextApiResponse } from "next";
import { createSection } from "@/helpers/teacher/Sections";
import { insertNewSectionAndGradesForAllStudents } from "@/helpers/teacher/Students";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { gradeLevel, name, academicYear, subjects, grades } = req.body;

        const response = await createSection(gradeLevel, name, academicYear, subjects);

        if (!response.isSuccess) return res.status(response.status).json(response);

        const studentUpdate = await insertNewSectionAndGradesForAllStudents(response.data!.insertedId, gradeLevel, name, academicYear, grades);

        res.status(response.status).json(response);
    } catch (e) {
        console.error(e);
    }
}