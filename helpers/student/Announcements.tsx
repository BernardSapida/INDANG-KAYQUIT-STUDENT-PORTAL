import clientPromise from "@/lib/mongodb";
import axios from "axios";

import { AnnouncementResponse } from "@/types/global";

export const fetchAnnouncements = async (gradeLevel: string, section: string, academicYear: string): Promise<AnnouncementResponse> => {
    const response = await axios.post(
        `${process.env.NEXTAUTH_URL}/api/v1/teacher/get/announcements`,
        { gradeLevel, section, academicYear }
    );

    return response.data;
}

export const fetchAnnouncementsInDatabase = async (gradeLevel: string, section: string, academicYear: string): Promise<AnnouncementResponse> => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("announcements").findOne({
        gradeLevel,
        section,
        academicYear
    });

    if (response) {
        const { gradeLevel, section, academicYear, announcements } = response;

        return {
            status: 200,
            isSuccess: true,
            data: {
                gradeLevel: gradeLevel,
                section: section,
                academicYear: academicYear,
                announcements: announcements
            },
            message: "Successfully found announcements"
        };
    }

    return {
        status: 404,
        isSuccess: false,
        data: {},
        message: "No announcements found"
    }
}