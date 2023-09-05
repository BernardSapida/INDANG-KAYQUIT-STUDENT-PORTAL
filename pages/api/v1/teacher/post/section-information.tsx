import type { NextApiRequest, NextApiResponse } from "next";
import { fetchSection } from "@/helpers/teacher/Sections";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { gradeLevel, section, academicYear } = req.body;
        const response = await fetchSection(gradeLevel, section, academicYear);

        res.status(response.status).json(response);
    } catch (e) {
        console.error(e);
    }
}