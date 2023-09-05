import type { NextApiRequest, NextApiResponse } from "next";
import { fetchFilteredStudents } from "@/helpers/teacher/Students";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { searchTerm } = req.body;
    const response = await fetchFilteredStudents(searchTerm);

    res.status(response.status).json(response);
  } catch (e) {
    console.error(e);
  }
}