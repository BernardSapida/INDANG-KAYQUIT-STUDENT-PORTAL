import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import axios from "axios";
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

        await postAnnouncementInDatabase(gradeLevel, section, academicYear, title, description);

        res.status(200).json({
            status: 200,
            isSuccess: true,
            message: "Announcement posted successfully"
        });
    } catch (e) {
        console.error(e);
    }
}