import type { NextApiRequest, NextApiResponse } from "next";
import { fetchSection } from "@/helpers/teacher/Sections";
import { fetchSectionStudents } from "@/helpers/teacher/Students";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { gradeLevel, section, academicYear } = req.body;

        const sectionResponse = await fetchSection(gradeLevel, section, academicYear);

        if (!sectionResponse.isSuccess) return res.status(sectionResponse.status).json(sectionResponse);

        const sectionId = sectionResponse.data!._id;
        const response = await fetchSectionStudents(sectionId!, gradeLevel, section, academicYear)

        res.status(response.status).json(response);
    } catch (e) {
        console.error(e);
    }
}