import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import axios from "axios";

type Data = {
  sucess: string;
  message: string;
  data: Array<number | string | Array<any>>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const client = await clientPromise;
    // const db = client.db("");

    const { email, password } = req.body;

    const data = await axios.get(
      `${process.env.NEXTAUTH_URL}/api/v1/test`
    );

    res.json({
      id: 123,
      role: "teacher", // teacher or student
      email: "bernard.sapdia@kayquit.edu.ph"
      // email: email
    });
  } catch (e) {
    console.error(e);
  }
}