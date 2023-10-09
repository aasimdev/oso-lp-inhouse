import { NextResponse } from "next/server";

const WAITLIST_ID = "2";

async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`

  const response = await fetch(verificationUrl, { method: "POST" })
  const data = await response.json()

  return data.success
}


export async function POST(req) {
  const { email, token } = await req.json();
  try {

    const isRecaptchaValid = await verifyRecaptcha(token)

    if (!isRecaptchaValid) {
      return NextResponse.json(
        { status: "error", message: "reCAPTCHA verification failed" },
        { status: 400 }
      )
    }

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
    if (res.status === 422 && data.errors && data.errors[0].code === "duplicate") {
      return NextResponse.json({ status: "already_exists", error: data.errors[0].title }, { status: 422 });
    }
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

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
