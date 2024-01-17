import { fetchProfileInDatabase } from "@/helpers/teacher/Profile";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { email } = req.body;
        const response = await fetchProfileInDatabase(email);

        res.status(200).json(response);
    } catch (e) {
        console.error(e);
    }
}