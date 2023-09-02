import axios from "axios";
import { Section } from "@/types/global";

export const fetchSectionInformation = async (gradeLevel: string, section: string, academicYear: string): Promise<Section> => {
    const res = await axios.post(
        `/api/v1/teacher/post/section-information`,
        { gradeLevel, section, academicYear }
    );

    return res.data;
}