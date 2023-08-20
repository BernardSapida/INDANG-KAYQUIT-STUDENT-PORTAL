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

    // const data = await db.collection("").find({}).limit(2).toArray();
    // console.log(data.length)
    res.json({
      id: 123,
      role: "student", // teacher or user
      email: email,
      password: password,
    });
  } catch (e) {
    console.error(e);
  }
}