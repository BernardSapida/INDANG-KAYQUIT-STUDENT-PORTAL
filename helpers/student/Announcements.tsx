import axios from "axios";

import { ClassAnnouncement, StudentClasses } from "@/types/global";

export const fetchAnnouncements = async (gradeLevel: string, section: string, academicYear: string): Promise<ClassAnnouncement> => {
    const response = await axios.post(
        `${process.env.NEXTAUTH_URL}/api/v1/teacher/get/announcements`,
        { gradeLevel, section, academicYear }
    );

    return response.data;
}