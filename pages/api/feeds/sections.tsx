import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from "next";
import { generateGradeLevel } from '@/utils/feeds';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const sectionsSourceFilePath = './feeds/sections-source.json';
        const data = fs.readFileSync(sectionsSourceFilePath, "utf8");
        const sections = JSON.parse(data);

        const sectionsFilePath = './feeds/sections.json';
        const sectionsData = await getSections(sections);
        fs.writeFileSync(sectionsFilePath, JSON.stringify(sectionsData));

        res.status(200).json({ isSuccess: true, message: "Sections created successfully" });
    } catch (e) {
        console.error(e);
    }
}

const getSections = (sections: any[]): Record<string, any>[] => {
    const allSections: Record<string, any>[] = [];

    sections.filter(section => {
        const academicYears: string[] = Object.keys(section);

        for (let i = 0; i < academicYears.length; i++) {
            const academicYear: string = academicYears[i];

            const currentYearNarraIds: string[] = section[academicYear]["narra"]["narraSectionsId"];
            const currentYearNarraStudents: string[] = section[academicYear]["narra"]["narraStudents"];
            const currentYearAkasyaIds: string[] = section[academicYear]["akasya"]["akasyaSectionsId"];
            const currentYearAkasyaStudents: string[] = section[academicYear]["akasya"]["akasyaStudents"];

            for (let s = 0; s < 7; s++) {
                const narraSection: Record<string, any> = {
                    "_id": {
                        "$oid": currentYearNarraIds[s]
                    },
                    "gradeLevel": generateGradeLevel(s),
                    "name": "Narra",
                    "academicYear": academicYear,
                    "subjects": [
                        {
                            "subjectName": "English",
                            "time": "8:00 AM - 8:45 AM",
                            "day": "Monday",
                            "room": `Narra ${generateGradeLevel(s)}`
                        },
                        {
                            "subjectName": "Math",
                            "time": "9:00 AM - 9:45 AM",
                            "day": "Monday",
                            "room": `Narra ${generateGradeLevel(s)}`
                        },
                        {
                            "subjectName": "Filipino",
                            "time": "10:00 AM - 10:45 AM",
                            "day": "Tuesday",
                            "room": `Narra ${generateGradeLevel(s)}`
                        },
                        {
                            "subjectName": "MTB",
                            "time": "11:00 AM - 11:45 AM",
                            "day": "Tuesday",
                            "room": `Narra ${generateGradeLevel(s)}`
                        },
                        {
                            "subjectName": "Araling Panlipunan",
                            "time": "9:00 AM - 9:45 AM",
                            "day": "Wednesday",
                            "room": `Narra ${generateGradeLevel(s)}`
                        },
                        {
                            "subjectName": "ESP",
                            "time": " 11:00 AM - 11:45 AM",
                            "day": "Wednesday",
                            "room": `Narra ${generateGradeLevel(s)}`
                        },
                        {
                            "subjectName": "Science",
                            "time": " 11:00 AM - 11:45 AM",
                            "day": "Thursday",
                            "room": `Narra ${generateGradeLevel(s)}`
                        },
                        {
                            "subjectName": "MAPEH",
                            "time": "8:00 AM - 8:45 AM",
                            "day": "Friday",
                            "room": `Narra ${generateGradeLevel(s)}`
                        }
                    ],
                    "students": currentYearNarraStudents,
                    "createdAt": {
                        "$date": "2023-09-04T13:25:35.659Z"
                    },
                    "updatedAt": {
                        "$date": "2023-09-04T13:25:35.659Z"
                    }
                };

                allSections.push(narraSection);

                const akasyaSection: Record<string, any> = {
                    "_id": {
                        "$oid": currentYearAkasyaIds[s]
                    },
                    "gradeLevel": generateGradeLevel(s),
                    "name": "Akasya",
                    "academicYear": academicYear,
                    "subjects": [
                        {
                            "subjectName": "English",
                            "time": "8:00 AM - 8:45 AM",
                            "day": "Monday",
                            "room": `Akasya ${generateGradeLevel(s)}`
                        },
                        {
                            "subjectName": "Math",
                            "time": "9:00 AM - 9:45 AM",
                            "day": "Monday",
                            "room": `Akasya ${generateGradeLevel(s)}`
                        },
                        {
                            "subjectName": "Filipino",
                            "time": "10:00 AM - 10:45 AM",
                            "day": "Tuesday",
                            "room": `Akasya ${generateGradeLevel(s)}`
                        },
                        {
                            "subjectName": "MTB",
                            "time": "11:00 AM - 11:45 AM",
                            "day": "Tuesday",
                            "room": `Akasya ${generateGradeLevel(s)}`
                        },
                        {
                            "subjectName": "Araling Panlipunan",
                            "time": "9:00 AM - 9:45 AM",
                            "day": "Wednesday",
                            "room": `Akasya ${generateGradeLevel(s)}`
                        },
                        {
                            "subjectName": "ESP",
                            "time": " 11:00 AM - 11:45 AM",
                            "day": "Wednesday",
                            "room": `Akasya ${generateGradeLevel(s)}`
                        },
                        {
                            "subjectName": "Science",
                            "time": " 11:00 AM - 11:45 AM",
                            "day": "Thursday",
                            "room": `Akasya ${generateGradeLevel(s)}`
                        },
                        {
                            "subjectName": "MAPEH",
                            "time": "8:00 AM - 8:45 AM",
                            "day": "Friday",
                            "room": `Akasya ${generateGradeLevel(s)}`
                        }
                    ],
                    "students": currentYearAkasyaStudents,
                    "createdAt": {
                        "$date": "2023-09-04T13:25:35.659Z"
                    },
                    "updatedAt": {
                        "$date": "2023-09-04T13:25:35.659Z"
                    }
                };

                allSections.push(akasyaSection);
            }

        }
    });

    return allSections;
}

