import React from "react";
import ThankYouViewFour from "@/container/thankyou/optionFour";

export const metadata = {
  title: "Thank you",
};

const Page = ({ searchParams }) => {
  const { email, checkout_session_id } = searchParams;
  return (
    <>
      <ThankYouViewFour email={email} checkoutSessionId={checkout_session_id} />
    </>
  );
};

export default Page;
