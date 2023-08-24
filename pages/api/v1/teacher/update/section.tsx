import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import axios from "axios";
import { ObjectId } from "mongodb";

type Data = {
    sucess: string;
    message: string;
    data: Array<number | string | Array<any>>;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const client = await clientPromise;
        const db = client.db("student_portal");

        const {
            sectionId,
            gradeLevel,
            name,
            academicYear,
            subjects,
            grades,
            addedSubjects,
            removedSubjects
        }: {
            sectionId: string,
            gradeLevel: string,
            name: string,
            academicYear: string,
            subjects: Record<string, any>[],
            grades: Record<string, any>[],
            addedSubjects: string[],
            removedSubjects: string[]
        } = req.body;

        console.log("UPDATING...")
        console.log(addedSubjects.length > 0)
        console.log(removedSubjects.length > 0)

        const data = await db.collection("sections").updateMany(
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

        console.log(data)

        if (removedSubjects.length > 0) {
            const update1 = await db.collection("students").updateMany(
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

            console.log("Removed!");
            console.log(removedSubjects);
            console.log(update1);
        }

        if (addedSubjects.length > 0) {
            // Add
            const update2 = await db.collection("students").updateMany(
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

            console.log("Added!");
            console.log(grades);
            console.log(update2);
        }


        // console.log(student)

        // Push new schedules of students
        // Create a grades also
        // With the same gradeLevel, section, academicYear

        res.json(data);
    } catch (e) {
        console.error(e);
    }
}