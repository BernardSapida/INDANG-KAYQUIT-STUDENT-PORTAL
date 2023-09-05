import type { NextApiRequest, NextApiResponse } from "next";
import { fetchStudent } from "@/helpers/teacher/Students";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { email } = req.body;
        const response = await fetchStudent(email);

        res.status(200).json(response);
    } catch (e) {
        console.error(e);
    }
}