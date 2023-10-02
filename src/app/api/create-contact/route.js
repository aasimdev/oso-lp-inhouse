import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();
  try {
    const res = await fetch("https://oso619.api-us1.com/api/3/contacts/", {
      method: "POST",
      body: JSON.stringify({
        contact: {
          email,
        },
      }),
      headers: {
        "Api-Token":
          "9fe85628947279951896a28720b67f53aaf259408bc773d62a249eb6fe7297435d2ad791",
        "Content-Type": "application/json",
        "Allow-Cross-Origin": "*",
      },
    });
    //   const body = await res.json();

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 400 });
  }
}
