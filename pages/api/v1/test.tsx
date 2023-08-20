import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_airbnb");

    const buildings = await db.collection("listingsAndReviews").find({}).limit(2).toArray();
    // console.log(buildings.length)
    res.json(buildings);
  } catch (e) {
    console.error(e);
  }
}
