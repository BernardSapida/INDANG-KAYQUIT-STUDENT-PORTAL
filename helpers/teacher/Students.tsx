import clientPromise from "@/lib/mongodb";

import { Grade, Student } from "@/types/global";
import { ObjectId } from "mongodb";
import { addStudentInSection } from "./Sections";

export const createStudent = async (studentInfo: Student) => {
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

    if (response.acknowledged) {
        return {
            status: 200,
            isSuccess: response.acknowledged,
            data: response,
            message: "Successfully created student"
        };
    }

    return {
        status: 403,
        isSuccess: response.acknowledged,
        message: "Failed to create student"
    };
}

export const insertNewSectionAndGradesForAllStudents = async (
    sectionId: ObjectId,
    gradeLevel: string,
    name: string,
    academicYear: string,
    grades: Grade[]
) => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("students").updateMany(
        {
            $and: [
                { "enrollmentDetails.currentGradeLevel": gradeLevel },
                { "enrollmentDetails.currentSection": name },
                { "enrollmentDetails.academicYear": academicYear },
            ]
        },
        [
            {
                $set: {
                    newClass: {
                        section: sectionId,
                        grades: grades
                    }
                }
            },
            {
                $set: {
                    classes: { $concatArrays: ["$classes", ["$newClass"]] }
                }
            },
            { $unset: "newClass" },
            { $replaceWith: "$$ROOT" }
        ]
    );

    if (response.acknowledged) {
        return {
            status: 200,
            isSuccess: response.acknowledged,
            message: "Successfully updated students section and grades"
        };
    }

    return {
        status: 403,
        isSuccess: response.acknowledged,
        message: "Failed to update students section and grades"
    };
}

export const insertNewSectionAndGradesForStudent = async (
    studentId: ObjectId,
    sectionId: ObjectId,
    grades: Grade[]
) => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("students").updateOne(
        { "_id": studentId },
        {
            $push: {
                classes: {
                    section: sectionId,
                    grades: grades
                }
            }
        }
    );

    if (response.acknowledged) {
        return {
            status: 200,
            isSuccess: response.acknowledged,
            message: "Successfully updated student section and grades"
        };
    }

    return {
        status: 403,
        isSuccess: response.acknowledged,
        message: "Failed to update student section and grades"
    };
}

export const fetchFilteredStudents = async (searchTerm: string) => {
    const client = await clientPromise;
    const db = client.db("student_portal");
    let searchQuery = {}

    if (searchTerm) {
        searchQuery = {
            $or: [
                { "personalDetails.fullname": { $regex: searchTerm, $options: "i" } },
                { "enrollmentDetails.lrn": { $regex: searchTerm, $options: "i" } },
                { "combinedGradeSection": { $regex: searchTerm, $options: "i" } }
            ]
        }
    }

    const response = await db.collection("students").aggregate([
        {
            $addFields: {
                combinedGradeSection: {
                    $concat: [{ $toString: "$enrollmentDetails.currentGradeLevel" }, " - ", "$enrollmentDetails.currentSection"]
                }
            }
        },
        {
            $match: searchQuery
        },
        {
            $project: {
                _id: 1,
                "personalDetails": 1,
                "contactDetails": 1,
                "enrollmentDetails": 1,
                "kayquitAccount": 1,
                "class": 1,
            },
        }
    ]).toArray();

    if (response.length > 0) {
        return {
            status: 200,
            isSuccess: true,
            data: response,
            message: "Successfully fetched students list"
        };
    }

    return {
        status: 403,
        isSuccess: false,
        message: "Failed to fetch students list"
    }
}

export const fetchSectionStudentGrades = async (sectionId: string, gradeLevel: string, section: string, academicYear: string) => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("students").aggregate([
        {
            $match: {
                "classes.section": {
                    $eq: new ObjectId(sectionId)
                },
            }
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
            $addFields: {
                "Fullname": "$personalDetails.fullname",
                "Section": {
                    $concat: [
                        "$enrollmentDetails.currentGradeLevel",
                        " - ",
                        "$enrollmentDetails.currentSection"
                    ]
                },
                "lrn": "$enrollmentDetails.lrn",
                "Email": "$kayquitAccount.email",
            }
        },
        {
            $project: {
                _id: 0,
                "Fullname": 1,
                "Section": 1,
                "lrn": 1,
                "Email": 1,
                "classes": {
                    $filter: {
                        input: "$classes",
                        as: "class",
                        cond: {
                            $and: [
                                { $eq: ["$$class.sectionDetails.gradeLevel", gradeLevel] },
                                { $eq: ["$$class.sectionDetails.name", section] },
                                { $eq: ["$$class.sectionDetails.academicYear", academicYear] }
                            ]
                        }
                    },
                },
            },
        },
        {
            $addFields: {
                "grades": "$classes.grades",
            }
        },
        {
            $project: {
                _id: 0,
                "grades": 1,
                "Fullname": 1,
                "Section": 1,
                "lrn": 1,
                "Email": 1,
            },

        },
        {
            $sort: {
                "Fullname": 1
            }
        }
    ]).toArray();

    if (response.length > 0) {
        return {
            status: 200,
            isSuccess: true,
            data: response,
            message: "Successfully fetched section students' grade"
        };
    }

    return {
        status: 403,
        isSuccess: false,
        message: "Failed to fetch section students' grade"
    }
}

export const fetchSectionStudents = async (sectionId: string, gradeLevel: string, section: string, academicYear: string) => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("students").aggregate([
        {
            $match: {
                "classes.section": { $eq: new ObjectId(sectionId) },
            }
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
                personalDetails: 1,
                enrollmentDetails: 1,
                contactDetails: 1,
                kayquitAccount: 1,
                "classes": {
                    $filter: {
                        input: "$classes",
                        as: "class",
                        cond: {
                            $and: [
                                { $eq: ["$$class.sectionDetails.gradeLevel", gradeLevel] },
                                { $eq: ["$$class.sectionDetails.name", section] },
                                { $eq: ["$$class.sectionDetails.academicYear", academicYear] }
                            ]
                        }
                    },
                },
            },
        },
        {
            $addFields: {
                "Fullname": "$personalDetails.fullname",
                "Section": {
                    $concat: [
                        { $arrayElemAt: ["$classes.sectionDetails.gradeLevel", 0] },
                        " - ",
                        { $arrayElemAt: ["$classes.sectionDetails.name", 0] },
                    ]
                },
                "lrn": "$enrollmentDetails.lrn",
                "Email": "$kayquitAccount.email",
                "Sex": "$personalDetails.sex",
                "Religion": "$personalDetails.religion",
                "Birthdate": "$personalDetails.birthdate",
                "Guardian Name": "$contactDetails.guardian",
                "Contact Number": "$contactDetails.contactNumber",
            }
        },
        {
            $project: {
                "Fullname": 1,
                "Section": 1,
                "lrn": 1,
                "Email": 1,
                "Sex": 1,
                "Religion": 1,
                "Birthdate": 1,
                "Guardian Name": 1,
                "Contact Number": 1,
            }
        },
        {
            $sort: {
                "Fullname": 1
            }
        }
    ]).toArray();

    if (response.length > 0) {
        return {
            status: 200,
            isSuccess: true,
            data: response,
            message: "Successfully fetched section students"
        };
    }

    return {
        status: 403,
        isSuccess: false,
        message: "Failed to fetch section students"
    }
}

export const fetchStudent = async (email: string) => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("students").findOne({ "kayquitAccount.email": email });

    if (response) {
        return {
            status: 200,
            isSuccess: true,
            data: response,
            message: "Successfully fetched student"
        };
    }

    return {
        status: 404,
        isSuccess: false,
        message: "Failed to fetch student"
    }
}

export const updateStudentGrade = async (email: string, sectionId: string, grades: Grade[]) => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("students").updateOne(
        {
            "kayquitAccount.email": { $eq: email },
            "classes.section": { $eq: new ObjectId(sectionId) },
        },
        {
            $set: {
                "classes.$.grades": grades
            }
        }
    );

    if (response.acknowledged) {
        return {
            status: 200,
            isSuccess: response.acknowledged,
            message: "Successfully updated student grade"
        };
    }

    return {
        status: 403,
        isSuccess: response.acknowledged,
        message: "Failed to update student grade"
    };
}

export const updateStudentInformation = async (_id: string, studentInformation: Student) => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("students").updateOne(
        {
            "_id": new ObjectId(_id),
        },
        {
            $set: {
                personalDetails: {
                    ...studentInformation.personalDetails
                },
                enrollmentDetails: {
                    ...studentInformation.enrollmentDetails
                },
                contactDetails: {
                    ...studentInformation.contactDetails
                },
                kayquitAccount: {
                    ...studentInformation.kayquitAccount
                }
            }
        }
    );

    if (response.acknowledged) {
        return {
            status: 200,
            isSuccess: response.acknowledged,
            message: "Successfully updated student information"
        };
    }

    return {
        status: 403,
        isSuccess: response.acknowledged,
        message: "Failed to update student information"
    };
}

export const fetchFilteredStudentsGrade = async (searchTerm: string) => {
    const client = await clientPromise;
    const db = client.db("student_portal");
    let searchQuery = {}

    if (searchTerm) {
        searchQuery = {
            $or: [
                { "personalDetails.fullname": { $regex: searchTerm, $options: "i" } },
                { "enrollmentDetails.lrn": { $regex: searchTerm, $options: "i" } },
                { "combinedGradeSection": { $regex: searchTerm, $options: "i" } }
            ]
        }
    }

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
            $addFields: {
                combinedGradeSection: {
                    $concat: [{ $toString: "$enrollmentDetails.currentGradeLevel" }, " - ", "$enrollmentDetails.currentSection"]
                }
            }
        },
        {
            $match: searchQuery
        },
        {
            $project: {
                _id: 1,
                "personalDetails.fullname": 1,
                "enrollmentDetails": {
                    "lrn": 1
                },
                "classes": {
                    "section": 1,
                    "grades": 1,
                    "sectionDetails": {
                        "gradeLevel": 1,
                        "name": 1,
                    }
                },
                "kayquitAccount.email": 1,
            },
        }
    ]).toArray();

    if (response.length > 0) {
        return {
            status: 200,
            isSuccess: true,
            data: response,
            message: "Successfully fetched students grade"
        };
    }

    return {
        status: 403,
        isSuccess: false,
        message: "Failed to fetch students grade"
    }
}

export const updateStudentCurrentSection = async (studentId: string, oldSectionId: string, newSectionId: string) => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection("students").updateOne(
        {
            "_id": new ObjectId(studentId),
            "classes.section": new ObjectId(oldSectionId)
        },
        {
            $set: {
                "classes.$.section": new ObjectId(newSectionId)
            }
        }
    );

    if (response.acknowledged) {
        return {
            status: 200,
            isSuccess: true,
            data: response,
            message: "Successfully update student section"
        };
    }

    return {
        status: 404,
        isSuccess: false,
        message: "Failed to update student section"
    }
}
