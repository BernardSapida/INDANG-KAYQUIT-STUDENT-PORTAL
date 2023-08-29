import { matchPasswordAndConfirmPassword, updateUserPasswordInDatabase, validatePassword } from "@/helpers/student/Password";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const {
            email,
            currentPassword,
            newPassword,
            confirmPassword,
            role
        } = req.body;

        const currentPasswordValidationResponse = await validatePassword(email, currentPassword, role);

        if (!currentPasswordValidationResponse.isSuccess) {
            return res.status(currentPasswordValidationResponse.status).json(currentPasswordValidationResponse);
        }

        const matchedPasswordAndConfirmPassword = await matchPasswordAndConfirmPassword(newPassword, confirmPassword);

        if (!matchedPasswordAndConfirmPassword) {
            return res.status(401).json({
                status: 401,
                isSuccess: false,
                message: "Password and Confirm Password did not match"
            });
        }

        const response = await updateUserPasswordInDatabase(email, newPassword, role);

        res.status(response.status).json(response);
    } catch (e) {
        console.error(e);
    }
}