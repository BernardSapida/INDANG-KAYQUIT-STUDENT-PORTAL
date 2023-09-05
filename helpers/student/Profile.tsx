import clientPromise from "@/lib/mongodb";
import axios from "axios";

import { ProfileResponse, Student } from "@/types/global";

export const fetchStudentProfile = async (email: string): Promise<ProfileResponse> => {
    const response = await axios.post(
        `${process.env.NEXTAUTH_URL}/api/v1/student/post/profile`,
        { email: email }
    );

    return response.data;
}

export const fetchProfileInDatabase = async (email: string): Promise<ProfileResponse> => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("students").aggregate([
        {
            $match: { "kayquitAccount.email": email }
        },
        {
            $project: {
                _id: 0,
                "personalDetails": 1,
                "enrollmentDetails": 1,
                "contactDetails": 1,
                "kayquitAccount": 1,
            }
        },
        {
            $limit: 1
        }
    ]).toArray();

    if (response.length > 0) {
        const studentData: Student = {
            personalDetails: response[0].personalDetails,
            enrollmentDetails: response[0].enrollmentDetails,
            contactDetails: response[0].contactDetails,
            kayquitAccount: response[0].kayquitAccount
        };

        return {
            status: 200,
            isSuccess: true,
            data: studentData,
            message: "Successfully found student profile"
        };
    }

    return {
        status: 404,
        isSuccess: false,
        message: "No student profile found"
    }
}