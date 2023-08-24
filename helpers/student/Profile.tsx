import axios from "axios";

import { Student } from "@/types/global";

export const fetchStudentProfile = async (email: string): Promise<Student> => {
    const response = await axios.post(
        `${process.env.NEXTAUTH_URL}/api/v1/student/get/profile`,
        { email: email }
    );

    return response.data[0];
}