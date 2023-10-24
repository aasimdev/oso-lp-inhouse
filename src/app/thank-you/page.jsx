import React from "react";
import ThankYouView from "@/container/thankyou/Index";

export const metadata = {
  title: "Thank you"
};

export default function Page({ searchParams }) {
  const { email } = searchParams;
  return <ThankYouView email={email}/>;
};
