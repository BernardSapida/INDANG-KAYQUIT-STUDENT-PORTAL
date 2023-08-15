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
    const db = client.db("sample_db");
    const { email, password } = req.body;

    // const buildings = await db.collection("listingsAndReviews").find({}).limit(2).toArray();
    // console.log(buildings.length)
    res.json({
      id: 123,
      role: "Admin",
      email: email,
      password: password,
    });
  } catch (e) {
    console.error(e);
  }
}