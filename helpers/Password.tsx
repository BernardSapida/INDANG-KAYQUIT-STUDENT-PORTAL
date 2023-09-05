import { KayquitAccount, PasswordResponse } from "@/types/global";
import clientPromise from "@/lib/mongodb";
import bcrypt from 'bcrypt';
import axios from "axios";

export const updatePassword = async (email: string, currentPassword: string, newPassword: string, confirmPassword: string) => {
    const response = await axios.post(
        `/api/v1/student/update/password`,
        {
            email: email,
            currentPassword: currentPassword,
            newPassword: newPassword,
            confirmPassword: confirmPassword
        }
    );

    return response.data;
}

export const fetchPasswordInDatabase = async (email: string, role: string): Promise<PasswordResponse> => {
    const client = await clientPromise;
    const db = client.db("student_portal");

    const response = await db.collection(`${role}s`).findOne(
        {
            "kayquitAccount.email": { $eq: email },
        }
    );

    if (response) {
        const userAccound: KayquitAccount = {
            email: response.kayquitAccount.email,
            defaultPassword: response.kayquitAccount.defaultPassword,
            password: response.kayquitAccount.password,
        };

        return {
            status: 200,
            isSuccess: true,
            data: userAccound,
            message: "Successfully found user account"
        };
    }

    return {
        status: 404,
        isSuccess: false,
        message: "Cannot find user account"
    }
}

export const validatePassword = async (email: string, currentPassword: string, role: string): Promise<PasswordResponse> => {
    const response = await fetchPasswordInDatabase(email, role);

    if (response.status === 404) {
        return {
            status: 404,
            isSuccess: false,
            message: "Cannot find user account"
        }
    }

    const validCurrentPassword = await bcrypt.compare(currentPassword, response.data?.password!);

    if (!validCurrentPassword) {
        return {
            status: 401,
            isSuccess: false,
            message: "Current password is incorrect"
        }
    }

    return {
        status: 200,
        isSuccess: true,
        message: "Current password is correct"
    }
}

export const updateUserPasswordInDatabase = async (email: string, newPassword: string, role: string): Promise<PasswordResponse> => {
    const client = await clientPromise;
    const db = client.db("student_portal");
    let hashedPassword = await bcrypt.hash(newPassword, 10);

    const response = await db.collection(`${role}s`).updateOne(
        {
            "kayquitAccount.email": { $eq: email },
        },
        {
            $set: {
                "kayquitAccount.password": hashedPassword
            }
        }
    );

    return {
        status: 200,
        isSuccess: true,
        message: "Password successfully updated"
    }
}

export const matchPasswordAndConfirmPassword = async (newPassword: string, confirmPassword: string) => {
    return newPassword === confirmPassword;
}