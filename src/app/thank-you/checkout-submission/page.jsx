import React from "react";
import ThankYouView from "@/container/thankyou/Index";
import ThankYouViewFour from "@/container/thankyou/optionFour/CheckOutSubmission";

export const metadata = {
  title: "Thank you",
};

const Page = ({ searchParams }) => {
  const { email, checkout_session_id } = searchParams;
  return (
    <>
      <ThankYouViewFour />
    </>
  );
};
