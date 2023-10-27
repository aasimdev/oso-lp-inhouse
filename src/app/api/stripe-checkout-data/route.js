import { NextResponse } from "next/server";
const stripe = require("stripe")(
  "sk_test_51Nic2LK8YyrcUL9KZS1NvVxncMyppH8diHytMJcNbRVAxiUly0Nkp2zws6acxQm7hfbNPCgZJDv4FBPr6rSAIrPA00eoMU5mxh"
);

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
