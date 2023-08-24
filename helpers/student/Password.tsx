import axios from "axios";

export const updatePassword = async (email: string, currentPassword: string, newPassword: string, confirmPassword: string) => {
    const response = await axios.post(
        `/api/v1/teacher/update/password`,
        {
            email: email,
            currentPassword: currentPassword,
            newPassword: newPassword,
            confirmPassword: confirmPassword
        }
    );

    // It should return a message if successful
    return response.data;
}