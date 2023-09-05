import type { NextApiRequest, NextApiResponse } from "next";
import { fetchFilteredStudentsGrade } from "@/helpers/teacher/Students";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { searchTerm } = req.body;
        const response = await fetchFilteredStudentsGrade(searchTerm);

        res.status(response.status).json(response);
    } catch (e) {
        console.error(e);
    }
}