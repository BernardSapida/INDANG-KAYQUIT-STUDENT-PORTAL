import clientPromise from "@/lib/mongodb";
import axios from "axios";

import { TeacherProfileResponse, Teacher } from "@/types/global";

export const fetchTeacherProfile = async (email: string): Promise<TeacherProfileResponse> => {
    const response = await axios.post(
        `${process.env.NEXTAUTH_URL}/api/v1/teacher/get/profile`,
        { email: email }
    );

    return response.data;
}

export const fetchProfileInDatabase = async (email: string): Promise<TeacherProfileResponse> => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("teachers").aggregate([
        {
            $match: { "kayquitAccount.email": email }
        },
        {
            $project: {
                _id: 0,
                "personalDetails": 1,
                "sectionHandle": 1,
                "contactDetails": 1,
                "kayquitAccount": 1,
            }
        },
        {
            $limit: 1
        }
    ]).toArray();

    if (response.length > 0) {
        const teacherProfile: Teacher = {
            personalDetails: response[0].personalDetails,
            sectionHandle: response[0].sectionHandle,
            contactDetails: response[0].contactDetails,
            kayquitAccount: response[0].kayquitAccount
        };

        return {
            status: 200,
            isSuccess: true,
            data: teacherProfile,
            message: "Successfully found teacher profile"
        };
    }

    return {
        status: 404,
        isSuccess: true,
        message: "No teacher profile found"
    }
}