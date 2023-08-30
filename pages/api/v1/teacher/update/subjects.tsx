import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { addSubjectsInSection, removeSubjectsInSection, updateSection } from "@/helpers/teacher/Subjects";

import { Subject, Grade } from "@/types/global";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const client = await clientPromise;
        const db = client.db("student_portal");

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

        await updateSection(gradeLevel, name, academicYear, subjects);


        if (removedSubjects.length > 0) {
            await removeSubjectsInSection(sectionId, gradeLevel, name, academicYear, removedSubjects);
        }

        if (addedSubjects.length > 0) {
            await addSubjectsInSection(sectionId, gradeLevel, name, academicYear, addedSubjects);
        }

        res.status(200).json({
            status: 200,
            message: "Successfully updated section"
        });
    } catch (e) {
        console.error(e);
    }
}