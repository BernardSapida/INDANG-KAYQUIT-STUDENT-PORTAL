import type { NextApiRequest, NextApiResponse } from "next";

import { authenticateUser } from "@/helpers/student/Authenticate";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { email, password } = req.body;
    const response = await authenticateUser(email, password);

    res.json(response);
  } catch (e) {
    console.error(e);
  }
}