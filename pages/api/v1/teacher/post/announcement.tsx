import type { NextApiRequest, NextApiResponse } from "next";
import { postAnnouncementInDatabase } from "@/helpers/teacher/Announcements";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { gradeLevel, section, academicYear, title, description }:
            {
                gradeLevel: string,
                section: string,
                academicYear: string,
                title: string,
                description: string
            } = req.body;

        const postResponse = await postAnnouncementInDatabase(gradeLevel, section, academicYear, title, description);

        res.status(postResponse.status).json(postResponse);
    } catch (e) {
        console.error(e);
    }
}