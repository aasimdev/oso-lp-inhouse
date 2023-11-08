import React from "react";
import ThankYouView from "@/container/thankyou/Index";
import ThankYouViewThree from "@/container/thankyou/optionThree";

export const metadata = {
  title: "Thank you",
};

export default function Page({ searchParams }) {
  const { email, checkout_session_id } = searchParams;
  return <ThankYouViewThree />;
}
