import { NextResponse } from "next/server";

const url = "https://trackcmp.net/event";

export async function POST(req) {
  const { event, email } = await req.json();

  const formData = new URLSearchParams();

  formData.append("actid", "801867771");
  formData.append("key", process.env.ACTIVE_CAMPAIGN_EVENT_KEY);
  formData.append("event", event);
  formData.append("visit", JSON.stringify({ email }));

  // console.log("event----------", event, email);

  try {
    const trackEvent = await fetch(url, {
      method: "POST",
      body: formData.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Allow-Cross-Origin": "*",
      },
    });

    const resData = await trackEvent.json();

    // console.log("----------response", resData, resData.data);
    return NextResponse.json(
      { status: "success" },
      { status: 200, message: "successfully track" }
    );
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}