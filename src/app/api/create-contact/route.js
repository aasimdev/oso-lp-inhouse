import { NextResponse } from "next/server";

const WAITLIST_ID = "2";

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
    const data = await res.json();
    const res2 = await fetch(
      `${process.env.ACTIVE_CAMPAIGN_URL}/api/3/contactLists/`,
      {
        method: "POST",
        body: JSON.stringify({
          contactList: {
            contact: data.contact.id,
            list: WAITLIST_ID,
            status: "1",
          },
        }),
        headers: {
          "Api-Token": process.env.ACTIVE_CAMPAIGN_API_TOKEN,
          "Content-Type": "application/json",
          "Allow-Cross-Origin": "*",
        },
      }
    );

    // return NextResponse.json({ status: "success" }, { status: 200 });
    return console.log(res);
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 400 });
  }
}
