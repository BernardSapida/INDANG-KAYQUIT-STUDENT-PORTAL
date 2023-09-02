import clientPromise from "@/lib/mongodb";

import { Grade, Subject } from "@/types/global";
import { ObjectId } from "mongodb";

export const updateSection = async (gradeLevel: string, name: string, academicYear: string, subjects: Subject[]) => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("sections").updateMany(
        {
            $and: [
                { "gradeLevel": gradeLevel },
                { "name": name },
                { "academicYear": academicYear }
            ]
        },
        {
            $set: {
                subjects: subjects,
                updatedAt: new Date()
            }
        }
    );
}

export const removeSubjectsInSection = async (sectionId: string, gradeLevel: string, name: string, academicYear: string, removedSubjects: string[]) => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("students").updateMany(
        {
            $and: [
                { "enrollmentDetails.currentGradeLevel": gradeLevel },
                { "enrollmentDetails.currentSection": name },
                { "enrollmentDetails.academicYear": academicYear }
            ],
        },
        {
            $pull: {
                "classes.$[class].grades": { "subjectName": { $in: removedSubjects } }
            } as any
        },
        {
            arrayFilters: [{ "class.section": new ObjectId(sectionId) }]
        }
    );
}

export const addSubjectsInSection = async (sectionId: string, gradeLevel: string, name: string, academicYear: string, addedSubjects: Grade[]) => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("students").updateMany(
        {
            $and: [
                { "enrollmentDetails.currentGradeLevel": gradeLevel },
                { "enrollmentDetails.currentSection": name },
                { "enrollmentDetails.academicYear": academicYear }
            ],
        },
        {
            $push: {
                "classes.$[class].grades": {
                    $each: addedSubjects
                }
            } as any
        },
        {
            arrayFilters: [{ "class.section": new ObjectId(sectionId) }]
        }
    );
}

// export const fetchProfileInDatabase = async (email: string) => {
//     const client = await clientPromise;
//     const db = client.db("student_portal");

//     const response = await db.collection("teachers").aggregate([
//         {
//             $match: { "kayquitAccount.email": email }
//         },
//         {
//             $project: {
//                 _id: 0,
//                 "personalDetails": 1,
//                 "sectionHandle": 1,
//                 "contactDetails": 1,
//                 "kayquitAccount": 1,
//             }
//         },
//         {
//             $limit: 1
//         }
//     ]).toArray();

//     if (response.length > 0) {
//         const teacherProfile: Teacher = {
//             personalDetails: response[0].personalDetails,
//             sectionHandle: response[0].sectionHandle,
//             contactDetails: response[0].contactDetails,
//             kayquitAccount: response[0].kayquitAccount
//         };

//         return {
//             status: 200,
//             isSuccess: true,
//             data: teacherProfile,
//             message: "Successfully found teacher profile"
//         };
//     }

//     return {
//         status: 404,
//         isSuccess: true,
//         message: "No teacher profile found"
//     }
// }