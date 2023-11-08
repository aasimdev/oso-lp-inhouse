import React from "react";
import ThankYouView from "@/container/thankyou/Index";
import ThankYouViewTwo from "@/container/thankyou/optionTwo";

export const metadata = {
  title: "Thank you",
};

export default function Page({ searchParams }) {
  const { email, checkout_session_id } = searchParams;
  return <ThankYouViewTwo />;
}
