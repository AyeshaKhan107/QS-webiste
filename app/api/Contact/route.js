import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";


export async function GET(req) {
  try {
    const auth = req.headers.get("authorization");

    if (!auth || auth !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const client = await clientPromise;
    const db = client.db("Adv");
    const contacts = await db.collection("Contact")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, contacts });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    const client = await clientPromise;
    const db = client.db("Adv");

    await db.collection("Contact").insertOne({
      name,
      email,
      phone,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
