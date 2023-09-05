import clientPromise from "@/lib/mongodb";

import axios from "axios";

import { SubjectResponse, StudentClasses } from "@/types/global";

export const fetchStudentSubjects = async (email: string): Promise<SubjectResponse> => {
    const response = await axios.post(
        `${process.env.NEXTAUTH_URL}/api/v1/student/post/subjects`,
        { email: email }
    );

    return response.data;
}

export const fetchSubjectsInDatabase = async (email: string): Promise<any> => {
    const client = await clientPromise;
    const db = client.db("student_portal");
    const response = await db.collection("students").aggregate([
        {
            $match: { "kayquitAccount.email": email }
        },
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
            $project: {
                _id: 0,
                "classes.section": 1,
                "classes.sectionDetails": {
                    "gradeLevel": 1,
                    "name": 1,
                    "academicYear": 1,
                    "subjects": 1
                }
            }
        },
        {
            $limit: 1
        }
    ]).toArray();

    if (response.length > 0) {
        const classes: StudentClasses = { classes: response[0].classes };

        return {
            status: 200,
            isSuccess: true,
            data: classes,
            message: "Successfully found student subjects"
        };
    }

    return {
        status: 404,
        isSuccess: false,
        data: [],
        message: "No student subjects found"
    }
}