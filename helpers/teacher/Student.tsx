import clientPromise from "@/lib/mongodb";

import { Student } from "@/types/global";
import { ObjectId } from "mongodb";

export const postStudentInDatabase = async (studentInfo: Student) => {
    const client = await clientPromise;
    const db = client.db("student_portal");
    const sectionId = new ObjectId(studentInfo.classes![0].section);
    const studentOID = new ObjectId();

    studentInfo.classes![0].section = sectionId;

    const response = await db.collection("students").insertOne({
        _id: studentOID,
        ...studentInfo,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    await addStudentInSection(sectionId, studentOID);

    return response;
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

    return response;
}