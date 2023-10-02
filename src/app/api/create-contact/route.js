import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();
  try {
    const res = await fetch(
      `${process.env.ACTIVE_CAMPAIGN_URL}/api/3/contacts/`,
      {
        method: "POST",
        body: JSON.stringify({
          contact: {
            email,
          },
        }),
        headers: {
          "Api-Token": process.env.ACTIVE_CAMPAIGN_API_TOKEN,
          "Content-Type": "application/json",
          "Allow-Cross-Origin": "*",
        },
      }
    );
    //   const body = await res.json();

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 400 });
  }
}
