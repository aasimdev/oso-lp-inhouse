import React from "react";
import ThankYouCheckSubmission from "@/container/thankyou/checkoutSubmission";

export const metadata = {
  title: "Thank you Checkout",
};

const Page = ({ searchParams }) => {
  const { email, checkout_session_id } = searchParams;
  return (
    <>
      <ThankYouCheckSubmission email={email} checkoutSessionId={checkout_session_id} />
    </>
  );
};


export default Page;