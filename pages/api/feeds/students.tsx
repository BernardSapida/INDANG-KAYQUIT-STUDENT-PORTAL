import fs from 'fs';
import bcrypt from 'bcrypt';

import type { NextApiRequest, NextApiResponse } from "next";

import { ObjectId } from 'mongodb';
import { capitalize, generateAddress, generateBirthdate, generateCivilStatus, generateContact, generateFullname, generateGrade, generateGradeLevel, generateLRN, generatePassword, generateReligion, generateSex, generateStudentEmail, generateStudentNumber } from '@/utils/feeds';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const [students, sections] = await getAllCreatedStudent();
        const studentsData = JSON.stringify(students);
        const sectionsData = JSON.stringify(sections);

        const studentsFilePath = './feeds/students.json';
        const sectionsFilePath = './feeds/sections-source.json';

        fs.writeFileSync(studentsFilePath, studentsData);
        fs.writeFileSync(sectionsFilePath, sectionsData);

        res.status(200).json({ isSuccess: true, message: "Student created successfully" });
    } catch (e) {
        console.error(e);
    }
}

const getAllCreatedStudent = async () => {
    const students = [];
    const sections: any = [];
    const fullnames: Record<string, any> = {};
    let range = 560;

    for (let academicYear = 2017; academicYear <= 2023; academicYear++) {
        //  Kinder - Grade 6 (Narra) | For current academic year
        const narraSectionsId = [
            new ObjectId().toString(),
            new ObjectId().toString(),
            new ObjectId().toString(),
            new ObjectId().toString(),
            new ObjectId().toString(),
            new ObjectId().toString(),
            new ObjectId().toString()
        ];

        //  Kinder - Grade 6 (Akasya) | For current academic year
        const akasyaSectionsId = [
            new ObjectId().toString(),
            new ObjectId().toString(),
            new ObjectId().toString(),
            new ObjectId().toString(),
            new ObjectId().toString(),
            new ObjectId().toString(),
            new ObjectId().toString()
        ];

        const section: any = {
            [`${academicYear}-${academicYear + 1}`]: {}
        }

        // Students for current academic year
        // Those students went to Kinder - Grade 6
        const narraStudents = [];
        const akasyaStudents = [];

        for (let n = range; n < range + 40; n++) {
            const sex = generateSex();
            let studentFullname = generateFullname(sex);

            // While studentFullname exists in fullnames, generate another studentFullname
            while (fullnames[studentFullname]) studentFullname = generateFullname(sex);
            fullnames[studentFullname] = true;

            const [studentId, student] = await createNewStudent(
                studentFullname,
                sex,
                "Narra",
                academicYear,
                n,
                narraSectionsId
            );
            students.push(student);
            narraStudents.push({ "$oid": studentId });
        }

        for (let n = range + 40; n < range + 80; n++) {
            const sex = generateSex();
            let studentFullname = generateFullname(sex);

            // While studentFullname exists in fullnames, generate another studentFullname
            while (fullnames[studentFullname]) studentFullname = generateFullname(sex);
            fullnames[studentFullname] = true;

            const [studentId, student] = await createNewStudent(
                studentFullname,
                sex,
                "Akasya",
                academicYear,
                n,
                akasyaSectionsId
            );
            students.push(student);
            akasyaStudents.push({ "$oid": studentId });
        }

        section[`${academicYear}-${academicYear + 1}`] = {
            narra: { narraSectionsId, narraStudents },
            akasya: { akasyaSectionsId, akasyaStudents }
        }

        range += 80;

        sections.push(section);
    }

    return [students, sections];
}

const createNewStudent = async (
    studentFullname: string,
    sex: ("male" | "female"),
    section: string,
    academicYear: number,
    n: number,
    sectionsId: string[]) => {
    const studentId = new ObjectId().toString();
    const password = generatePassword();
    const hashedPassword = await bcrypt.hash(password, 10);

    return [studentId, {
        "_id": {
            "$oid": studentId
        },
        "personalDetails": {
            "fullname": studentFullname,
            "birthdate": generateBirthdate(),
            "sex": capitalize(sex),
            "religion": generateReligion(),
            "civilStatus": generateCivilStatus()
        },
        "enrollmentDetails": {
            "currentGradeLevel": "6",
            "currentSection": section,
            "lrn": generateLRN(n),
            "studentNumber": generateStudentNumber(n),
            "academicYear": `${academicYear}-${academicYear + 1}`
        },
        "classes": [
            {
                "section": {
                    "$oid": sectionsId[0]
                },
                "grades": [
                    {
                        "subjectName": "English",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Math",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Filipino",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "MTB",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Araling Panlipunan",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Science",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Intermediate",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Mapeh",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "ESP",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    }
                ]
            },
            {
                "section": {
                    "$oid": sectionsId[1]
                },
                "grades": [
                    {
                        "subjectName": "English",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Math",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Filipino",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "MTB",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Araling Panlipunan",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Science",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Intermediate",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Mapeh",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "ESP",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    }
                ]
            },
            {
                "section": {
                    "$oid": sectionsId[2]
                },
                "grades": [
                    {
                        "subjectName": "English",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Math",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Filipino",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "MTB",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Araling Panlipunan",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Science",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Intermediate",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Mapeh",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "ESP",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    }
                ]
            },
            {
                "section": {
                    "$oid": sectionsId[3]
                },
                "grades": [
                    {
                        "subjectName": "English",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Math",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Filipino",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "MTB",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Araling Panlipunan",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Science",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Intermediate",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Mapeh",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "ESP",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    }
                ]
            },
            {
                "section": {
                    "$oid": sectionsId[4]
                },
                "grades": [
                    {
                        "subjectName": "English",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Math",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Filipino",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "MTB",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Araling Panlipunan",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Science",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Intermediate",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Mapeh",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "ESP",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    }
                ]
            },
            {
                "section": {
                    "$oid": sectionsId[5]
                },
                "grades": [
                    {
                        "subjectName": "English",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Math",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Filipino",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "MTB",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Araling Panlipunan",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Science",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Intermediate",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Mapeh",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "ESP",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    }
                ]
            },
            {
                "section": {
                    "$oid": sectionsId[6]
                },
                "grades": [
                    {
                        "subjectName": "English",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Math",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Filipino",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "MTB",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Araling Panlipunan",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Science",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Intermediate",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "Mapeh",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    },
                    {
                        "subjectName": "ESP",
                        "firstQuarter": generateGrade(),
                        "secondQuarter": generateGrade(),
                        "thirdQuarter": generateGrade(),
                        "fourthQuarter": generateGrade()
                    }
                ]
            }
        ],
        "contactDetails": {
            "address": generateAddress(),
            "guardian": generateFullname(sex),
            "contactNumber": generateContact()
        },
        "kayquitAccount": {
            "email": generateStudentEmail(studentFullname),
            "defaultPassword": password,
            "password": hashedPassword
        },
        "createdAt": new Date(),
        "updatedAt": new Date()
    }]
}