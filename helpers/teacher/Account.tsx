import clientPromise from "@/lib/mongodb";

import { Teacher } from "@/types/global";
import { ObjectId } from "mongodb";

export const createTeacher = async (teacherInfo: Teacher) => {
    const client = await clientPromise;
    const db = client.db("student_portal");
    const studentOID = new ObjectId();

    const response = await db.collection("teachers").insertOne({
        _id: studentOID,
        ...teacherInfo,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    if (response.acknowledged) {
        return {
            status: 200,
            isSuccess: response.acknowledged,
            data: response,
            message: "Successfully created teacher"
        };
    }

    return {
        status: 403,
        isSuccess: response.acknowledged,
        message: "Failed to create teacher"
    };
}