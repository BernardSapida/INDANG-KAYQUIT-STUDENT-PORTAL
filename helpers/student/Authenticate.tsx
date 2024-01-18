import clientPromise from "@/lib/mongodb";

import bcrypt from 'bcrypt';

import { AuthResult, Password } from "@/types/global";

export const authenticateUser = async (email: string, password: string): Promise<AuthResult> => {
    const role = isTeacherOrStudentDomain(email);

    if (!role) return { status: 400, isAuthorized: false, message: "Email address is invalid" };

    const user = await getUser(email, role);

    if (user?.password == undefined && user?.defaultPassword == undefined) {
        return { status: 400, isAuthorized: false, message: "Email address didn't exist" };
    }

    const matchedPassword = await bcrypt.compare(password, user?.password);
    const matchedDefaultPassword = password === user?.defaultPassword;

    if (matchedPassword || matchedDefaultPassword) {
        return {
            status: 200,
            isAuthorized: true,
            data: {
                email: email,
                fullname: user.fullname,
                gradeLevel: user.gradeLevel,
                section: user.section,
                role: role
            },
            message: "Successfully authenticated"
        };
    }

    return { status: 401, isAuthorized: false, message: "Password is incorrect" };
}

const getUser = async (email: string, role: string): Promise<Password> => {
    const client = await clientPromise;
    const db = client.db("student_portal");
    let gradeLevel: string;
    let section: string;

    if (role === "teacher") {
        gradeLevel = "$sectionHandle.currentGradeLevel";
        section = "$sectionHandle.currentSection";
    } else {
        gradeLevel = "$enrollmentDetails.currentGradeLevel";
        section = "$enrollmentDetails.currentSection";
    }

    // Get the passwords from the database
    const response = await db.collection(`${role}s`).aggregate([
        {
            $match: { "kayquitAccount.email": email }
        },
        {
            $addFields: {
                "fullname": "$personalDetails.fullname",
                "gradeLevel": gradeLevel,
                "section": section,
                "defaultPassword": "$kayquitAccount.defaultPassword",
                "password": "$kayquitAccount.password"
            }
        },
        {
            $project: {
                "_id": 0,
                "fullname": 1,
                "gradeLevel": 1,
                "section": 1,
                "defaultPassword": 1,
                "password": 1
            }
        },
        { $limit: 1 }
    ]).toArray();


    const result: Password = {
        fullname: response[0]?.fullname,
        gradeLevel: response[0]?.gradeLevel,
        section: response[0]?.section,
        defaultPassword: response[0]?.defaultPassword,
        password: response[0]?.password
    }

    return result;
}

const isTeacherOrStudentDomain = (email: string): string | null => {
    const teacherDomain = "@teacher.kayquit.edu.ph";
    const studentDomain = "@kayquit.edu.ph";

    if (email.endsWith(teacherDomain)) return "teacher";
    if (email.endsWith(studentDomain)) return "student";
    return null;
}