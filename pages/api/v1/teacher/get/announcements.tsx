import { fetchAnnouncementsInDatabase } from "@/helpers/student/Announcements";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { gradeLevel, section, academicYear } = req.body;
        const response = await fetchAnnouncementsInDatabase(gradeLevel, section, academicYear);

        res.status(response.status).json(response);
    } catch (e) {
        console.error(e);
    }
}