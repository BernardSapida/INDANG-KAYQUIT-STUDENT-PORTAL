import type { NextApiRequest, NextApiResponse } from "next";
import { addSubjectsInSection, removeSubjectsInSection, updateSection } from "@/helpers/teacher/Subjects";

import { Subject, Grade } from "@/types/global";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const {
            sectionId,
            gradeLevel,
            name,
            academicYear,
            subjects,
            addedSubjects,
            removedSubjects
        }: {
            sectionId: string,
            gradeLevel: string,
            name: string,
            academicYear: string,
            subjects: Subject[],
            addedSubjects: Grade[],
            removedSubjects: string[]
        } = req.body;

        const updateResponse = await updateSection(gradeLevel, name, academicYear, subjects);


        if (removedSubjects.length > 0) {
            await removeSubjectsInSection(sectionId, gradeLevel, name, academicYear, removedSubjects);
        }

        if (addedSubjects.length > 0) {
            await addSubjectsInSection(sectionId, gradeLevel, name, academicYear, addedSubjects);
        }

        res.status(200).json(updateResponse);
    } catch (e) {
        console.error(e);
    }
}