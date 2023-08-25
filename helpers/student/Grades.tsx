import clientPromise from "@/lib/mongodb";
import axios from "axios";

import { SubjectDetails, Grade, GradeResponse } from "@/types/global";

export const fetchStudentGrade = async (email: string): Promise<GradeResponse> => {
    const response = await axios.post(
        `${process.env.NEXTAUTH_URL}/api/v1/student/get/grades`,
        { email: email }
    );

    return response.data;
}

export const fetchGradesInDatabase = async (email: string): Promise<GradeResponse> => {
    const client = await clientPromise;
    const db = client.db("student_portal");
    const response = await db.collection("students").aggregate([
        {
            $unwind: "$classes"
        },
        {
            $lookup: {
                from: "sections",
                localField: "classes.section",
                foreignField: "_id",
                as: "classes.sectionDetails",
            },
        },
        {
            $unwind: "$classes.sectionDetails"
        },
        {
            $group: {
                _id: "$_id",
                personalDetails: { $first: "$personalDetails" },
                enrollmentDetails: { $first: "$enrollmentDetails" },
                contactDetails: { $first: "$contactDetails" },
                kayquitAccount: { $first: "$kayquitAccount" },
                createdAt: { $first: "$createdAt" },
                updatedAt: { $first: "$updatedAt" },
                classes: {
                    $push: {
                        section: "$classes.section",
                        sectionDetails: "$classes.sectionDetails",
                        grades: "$classes.grades"
                    }
                }
            }
        },
        {
            $match: { "kayquitAccount.email": email }
        },
        {
            $project: {
                _id: 0,
                "classes": {
                    "grades": 1,
                    "sectionDetails": {
                        "gradeLevel": 1,
                        "name": 1,
                        "academicYear": 1
                    }
                }
            },
        }
    ]).toArray();

    if (response.length > 0) {
        const classes: { sectionDetails?: SubjectDetails, grades?: Grade[] } = response[0].classes;

        return {
            status: 200,
            isSuccess: true,
            data: classes,
            message: "Successfully found student grades"
        };
    }

    return {
        status: 404,
        isSuccess: true,
        data: {},
        message: "No student grades found"
    }
}