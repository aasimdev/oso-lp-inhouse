import React from "react";
import ThankYouView from "@/container/thankyou/Index";
import ThankYouViewOne from "@/container/thankyou/optionOne/Index";

export const metadata = {
  title: "Thank you",
};

export default function Page({ searchParams }) {
  const { email, checkout_session_id } = searchParams;
  return <ThankYouViewOne />;
}
