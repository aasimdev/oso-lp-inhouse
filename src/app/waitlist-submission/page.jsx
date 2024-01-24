import ThankYouView from "@/container/thankyou/WaitListSubmissionThankYou";

export const metadata = {
  title: "Thank you",
};

const Page = ({ searchParams }) => {
  const { email, checkout_session_id } = searchParams;

  return (
    <>
      <ThankYouView email={email} checkoutSessionId={checkout_session_id} />
    </>
  );
};

export default Page;
