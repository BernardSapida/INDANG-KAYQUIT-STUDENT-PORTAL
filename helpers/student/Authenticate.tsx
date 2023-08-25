import clientPromise from "@/lib/mongodb";

import bcrypt from 'bcrypt';

import { AuthResult, Password } from "@/types/global";

export const authenticateUser = async (email: string, password: string): Promise<AuthResult> => {
    const role = isTeacherOrStudentDomain(email);

    if (!role) return { status: 400, isAuthorized: false, message: "Email address is invalid" };

    const user = await getPasswords(email, role);

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
                role: role
            },
            message: "Successfully authenticated"
        };
    }

    return { status: 401, isAuthorized: false, message: "Password is incorrect" };
}

const getPasswords = async (email: string, role: string): Promise<Password> => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    // Get the passwords from the database
    const response = await db.collection(`${role}s`).aggregate([
        {
            $match: { "kayquitAccount.email": email }
        },
        {
            $addFields: {
                "defaultPassword": "$kayquitAccount.defaultPassword",
                "password": "$kayquitAccount.password"
            }
        },
        {
            $project: {
                "_id": 0,
                "defaultPassword": 1,
                "password": 1
            }
        },
        { $limit: 1 }
    ]).toArray();

    const result: Password = {
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