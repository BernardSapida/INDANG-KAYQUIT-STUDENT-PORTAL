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

    if (response.acknowledged) {
        return {
            status: 200,
            isSuccess: response.acknowledged,
            message: "Successfully updated section subjects"
        };
    }

    return {
        status: 403,
        isSuccess: response.acknowledged,
        message: "Failed to update section subjects"
    };
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

    if (response.acknowledged) {
        return {
            status: 200,
            isSuccess: response.acknowledged,
            message: "Successfully removed subjects in section"
        };
    }

    return {
        status: 403,
        isSuccess: response.acknowledged,
        message: "Failed to remove subjects in section"
    };
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

    if (response.acknowledged) {
        return {
            status: 200,
            isSuccess: response.acknowledged,
            message: "Successfully added subjects in section"
        };
    }

    return {
        status: 403,
        isSuccess: response.acknowledged,
        message: "Failed to add subjects in section"
    };
}