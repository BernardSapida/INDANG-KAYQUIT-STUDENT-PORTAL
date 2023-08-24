import axios from "axios";

import { SubjectDetails, Grade } from "@/types/global";

export const fetchStudentGrade = async (email: string): Promise<{ sectionDetails: SubjectDetails, grades: Grade[] }[]> => {
    const response = await axios.post(
        `${process.env.NEXTAUTH_URL}/api/v1/student/get/grades`,
        { email: email }
    );

    return response.data;
}