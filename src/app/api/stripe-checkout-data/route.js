import { NextResponse } from "next/server";
const stripe = require("stripe")("sk_test_zHVJsPqk1dU1TwofOCqBxwyT00lzpPRsCb");

export async function POST(req) {
  const { checkoutSessionId } = await req.json();
  try {
    if (checkoutSessionId) {
      const session = await stripe.checkout.sessions.retrieve(
        checkoutSessionId
      );

      // console.log(
      //   "----------------em",
      //   session,
      //   session?.customer_details?.email,
      //   session.subscription
      // );

      const subscriptionID = session?.subscription;
      let isMonthly = null;

      if (subscriptionID) {
        const subscription = await stripe.subscriptions.retrieve(
          subscriptionID
        );

        const billingInterval =
          subscription?.items?.data[0]?.price?.recurring?.interval;

        // console.log("----------------em2", billingInterval);

        if (billingInterval === "month") {
          isMonthly = true;
        }
        if (billingInterval === "year") {
          isMonthly = false;
        }
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
