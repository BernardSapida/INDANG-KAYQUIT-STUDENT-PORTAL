import clientPromise from "@/lib/mongodb";

import { Student } from "@/types/global";
import { ObjectId } from "mongodb";

export const postStudentInDatabase = async (studentInfo: Student) => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("students").insertOne({
        _id: new ObjectId(),
        ...studentInfo,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    return response;
}