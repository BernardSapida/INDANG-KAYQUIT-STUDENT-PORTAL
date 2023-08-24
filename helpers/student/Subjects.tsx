import axios from "axios";

import { StudentClasses } from "@/types/global";

export const fetchStudentSubjects = async (email: string): Promise<StudentClasses> => {
    const response = await axios.post(
        `${process.env.NEXTAUTH_URL}/api/v1/student/get/subjects`,
        { email: email }
    );

    return response.data[0];
}