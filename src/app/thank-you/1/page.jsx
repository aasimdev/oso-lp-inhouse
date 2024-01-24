import ThankYouViewOne from "@/container/thankyou/optionOne/Index";

export const metadata = {
  title: "Thank you",
};

export default function Page({ searchParams }) {
  const { email, checkout_session_id } = searchParams;
  console.log("email", email, "checkout_session_id", checkout_session_id);
  return <ThankYouViewOne />;
}
