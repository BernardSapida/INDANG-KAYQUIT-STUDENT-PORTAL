import clientPromise from "@/lib/mongodb";
import { Section, SectionCreationResponse, SectionDetailsResponse, Subject } from "@/types/global";
import { ObjectId } from "mongodb";

export const fetchSection = async (gradeLevel: string, section: string, academicYear: string): Promise<SectionDetailsResponse> => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("sections").findOne({
        gradeLevel: gradeLevel,
        name: section,
        academicYear: academicYear
    });

    if (response) {
        const sectionInfo: Section = {
            _id: response._id.toString(),
            name: response.name,
            gradeLevel: response.gradeLevel,
            academicYear: response.academicYear,
            subjects: response.subjects,
            students: response.students
        };

        return {
            status: 200,
            isSuccess: true,
            data: sectionInfo,
            message: "Successfully fetched section"
        };
    }

    return {
        status: 404,
        isSuccess: false,
        message: "Failed to fetch section"
    }
}

export const createSection = async (
    gradeLevel: string,
    name: string,
    academicYear: string,
    subjects: Subject[],
): Promise<SectionCreationResponse> => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("sections").insertOne({
        gradeLevel,
        name,
        academicYear,
        subjects,
        students: [],
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    if (response.acknowledged) {
        return {
            status: 200,
            isSuccess: true,
            data: {
                acknowledged: response.acknowledged,
                insertedId: response.insertedId
            },
            message: "Successfully created new section"
        };
    }

    return {
        status: 403,
        isSuccess: false,
        message: "Section failed to be created"
    };
}

export const addStudentInSection = async (sectionId: ObjectId, studentOID: ObjectId) => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("sections").updateOne(
        { "_id": sectionId },
        {
            $push: { students: studentOID }
        }
    );

    if (response.acknowledged) {
        return {
            status: 200,
            isSuccess: response.acknowledged,
            message: "Successfully updated section students"
        };
    }

    return {
        status: 403,
        isSuccess: response.acknowledged,
        message: "Failed to update section students"
    };
}