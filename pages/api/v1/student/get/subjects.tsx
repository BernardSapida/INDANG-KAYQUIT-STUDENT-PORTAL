import { fetchSubjectsInDatabase } from "@/helpers/student/Subjects";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { email } = req.body;
        const response = await fetchSubjectsInDatabase(email);

        res.status(response.status).json(response);
    } catch (e) {
        console.error(e);
    }
}