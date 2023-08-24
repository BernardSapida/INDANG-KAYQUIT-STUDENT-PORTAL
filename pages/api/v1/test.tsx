import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import bcrypt from 'bcrypt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const client = await clientPromise;
    const db = client.db("student_portal");

    let password = "@Password123";
    let hashedPassword = await bcrypt.hash(password, 10);

    // console.log(hashedPassword);

    res.json({ isMatched: await bcrypt.compare(password, "$2b$10$t1q6HnTmeyAH2PA3fqx/7unhUe.mrJhXXcWkPtW6/uTgDeqRA7Hzm") });
  } catch (e) {
    console.error(e);
  }
}
