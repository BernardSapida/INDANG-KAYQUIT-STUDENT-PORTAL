import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import { updateStudentCurrentSection } from "@/helpers/teacher/Students";
import { addStudentInSection } from "@/helpers/teacher/Sections";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        let { studentId, oldSectionId, newSectionId } = req.body;
        studentId = new ObjectId(studentId);
        oldSectionId = new ObjectId(oldSectionId);
        newSectionId = new ObjectId(newSectionId);

        const updateStudentSectionResponse = await updateStudentCurrentSection(studentId, oldSectionId, newSectionId);
        const insertStudentInNewSectionResponse = await addStudentInSection(newSectionId, studentId);
        const removeStudentInOldSectionResponse = await addStudentInSection(oldSectionId, studentId);

        res.status(200).json(updateStudentSectionResponse);
    } catch (e) {
        console.error(e);
    }
}