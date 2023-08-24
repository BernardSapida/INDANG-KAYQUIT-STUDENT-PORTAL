import clientPromise from "@/lib/mongodb";

import bcrypt from 'bcrypt';

interface Password {
    defaultPassword: string;
    password: string;
}

interface AuthResult {
    isAuthorized: boolean;
    data?: {
        email: string;
        role: string;
    },
    message?: string;
}

export const authenticateUser = async (email: string, password: string): Promise<AuthResult> => {
    const role = isTeacherOrStudentDomain(email);

    if (!role) return { isAuthorized: false, message: "Email address is invalid" };

    const user = await getPasswords(email, password, role);
    const matchedPassword = await bcrypt.compare(password, user.password);
    const matchedDefaultPassword = await bcrypt.compare(password, user.defaultPassword);

    if (matchedPassword || matchedDefaultPassword) {
        return {
            isAuthorized: true,
            data: {
                email: email,
                role: role
            }
        };
    }

    return { isAuthorized: false, message: "Password is incorrect" };
}

const getPasswords = async (email: string, password: string, role: string): Promise<Password> => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    // Get the passwords from the database
    const res = await db.collection(`${role}s`).aggregate([
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

    const data: Password = {
        defaultPassword: res[0]?.defaultPassword,
        password: res[0]?.password
    }

    return data;
}

const isTeacherOrStudentDomain = (email: string): string | null => {
    const teacherDomain = "@teacher.kayquit.edu.ph";
    const studentDomain = "@kayquit.edu.ph";

    if (email.endsWith(teacherDomain)) return "teacher";
    if (email.endsWith(studentDomain)) return "student";
    return null;
}