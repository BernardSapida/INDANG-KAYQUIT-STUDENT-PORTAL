import type { NextApiRequest, NextApiResponse } from "next";
import { fetchGradesInDatabase } from "@/helpers/student/Grades";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { email } = req.body;
        const response = await fetchGradesInDatabase(email);

        res.status(response.status).json(response);
    } catch (e) {
        console.error(e);
    }
}