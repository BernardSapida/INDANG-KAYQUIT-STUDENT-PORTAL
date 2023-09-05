import axios from "axios";
import { Section } from "@/types/global";

export const fetchSectionInformation = async (gradeLevel: string, section: string, academicYear: string): Promise<Section> => {
    const response = await axios.post(
        `/api/v1/teacher/post/section-information`,
        { gradeLevel, section, academicYear }
    );

    return response.data.data;
}