import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { checkoutSessionId } = await req.json();
  try {
    if (checkoutSessionId) {
      const session = await stripe.checkout.sessions.retrieve(
        checkoutSessionId
      );
      return NextResponse.json(
        {
          status: "success",
          data: { customerEmail: session?.customer_details?.email },
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { status: "success" },
      { status: 204, message: "checkout session id not found" }
    );
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
