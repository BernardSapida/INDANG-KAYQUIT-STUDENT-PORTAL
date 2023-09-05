import type { NextApiRequest, NextApiResponse } from "next";
import { updateStudentInformation } from "@/helpers/teacher/Students";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { _id, studentInformation } = req.body;
        const response = await updateStudentInformation(_id, studentInformation);

        res.status(response.status).json(response);
    } catch (e) {
        console.error(e);
    }
}