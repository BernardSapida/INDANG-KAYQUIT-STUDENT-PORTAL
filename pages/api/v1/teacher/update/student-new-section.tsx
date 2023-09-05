import type { NextApiRequest, NextApiResponse } from "next";
import { addStudentInSection } from "@/helpers/teacher/Sections";
import { insertNewSectionAndGradesForStudent } from "@/helpers/teacher/Students";
import { ObjectId } from "mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        let { studentId, sectionId, grades } = req.body;
        studentId = new ObjectId(studentId);
        sectionId = new ObjectId(sectionId);

        const insertResponse = await insertNewSectionAndGradesForStudent(studentId, sectionId, grades);
        const insertStudentInSectionResponse = await addStudentInSection(sectionId, studentId);

        res.status(200).json(insertResponse);
    } catch (e) {
        console.error(e);
    }
}