import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const NodeCache = require("node-cache");
const nodecacheData = new NodeCache({ stdTTL: 86400, checkperiod: 10 });

const WAITLIST_ID = "2";

async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  const response = await fetch(verificationUrl, { method: "POST" });
  const data = await response.json();

  return data.success;
}

export async function POST(req) {
  const {
    email,
    token,
    ac_tag_id,
    formId,
    userLang,
    userDevice,
    pathname,
    referral,
  } = await req.json();

  try {
    const isRecaptchaValid = await verifyRecaptcha(token);

    if (!isRecaptchaValid) {
      return NextResponse.json(
        { status: "error", message: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // Setup New Newsletter
    const res = await fetch(
      `${process.env.ACTIVE_CAMPAIGN_URL}/api/3/contacts/`,
      {
        method: "POST",
        body: JSON.stringify({
          contact: {
            email,
            fieldValues: [
              {
                field: "1",
                value: formId,
              },
              {
                field: "2",
                value: userLang,
              },
              {
                field: "3",
                value: userDevice,
              },
            ],
          },
        }),
        headers: {
          "Api-Token": process.env.ACTIVE_CAMPAIGN_API_TOKEN,
          "Content-Type": "application/json",
          "Allow-Cross-Origin": "*",
        },
      }
    );
    const contactRes = await res.json();

    if (res.status === 200 && email) {
      await stripe.customers.create({
        email,
        metadata: {
          referral,
        },
      });
    }

    if (
      res.status === 422 &&
      contactRes.errors &&
      contactRes.errors[0].code === "duplicate"
    ) {
      return NextResponse.json(
        { status: "already_exists", error: contactRes.errors[0].title },
        { status: 422 }
      );
    }

    if (ac_tag_id !== "") {
      const contactTagsRes = await fetch(
        `${process.env.ACTIVE_CAMPAIGN_URL}/api/3/contactTags/`,
        {
          method: "POST",
          body: JSON.stringify({
            contactTag: {
              contact: contactRes.contact.id,
              tag: ac_tag_id,
            },
          }),
          headers: {
            "Api-Token": process.env.ACTIVE_CAMPAIGN_API_TOKEN,
            "Content-Type": "application/json",
            "Allow-Cross-Origin": "*",
          },
        }
      );
      const contactTagRes = await contactTagsRes.json();
    }

    const waitListId = () => {
      switch (pathname) {
        case "/":
          return 3;
        case "/chat":
          return 4;
        case "/news":
          return 5;
        default:
          return 2;
      }
    };
    
    // Set List

    const res2 = await fetch(
      `${process.env.ACTIVE_CAMPAIGN_URL}/api/3/contactLists/`,
      {
        method: "POST",
        body: JSON.stringify({
          contactList: {
            contact: contactRes.contact.id,
            list: waitListId(),
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

    console.log("listID", res2);
    let variation;
    const isKey = nodecacheData.has("variation");
    if (isKey) {
      variation = nodecacheData.get("variation") === 0 ? 1 : 0;
    } else {
      variation = 0;
    }

    nodecacheData.set("variation", variation);

    const thankYouPage =
      variation === 0 ? "/thank-you" : "/waitlist-submission";
    return NextResponse.json(
      { status: "success", redirect: thankYouPage },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
