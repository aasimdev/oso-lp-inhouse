const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { monthlyPrice } from "@/constant/pricing";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { checkoutSessionId } = await req.json();
  try {
    if (checkoutSessionId) {
      const session = await stripe.checkout.sessions.retrieve(
        checkoutSessionId
      );

      const amountTotal = session.amount_total / 100;

      // console.log(
      //   "----------------em",
      //   session,
      //   session?.customer_details?.email,
      //   session.subscription
      // );
      let isMonthly = false;

      if (amountTotal === monthlyPrice) {
        isMonthly = true;
      }

      return NextResponse.json(
        {
          status: "success",
          data: { customerEmail: session?.customer_details?.email, isMonthly },
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
