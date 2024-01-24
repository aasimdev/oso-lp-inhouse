import ThankYouViewFour from "@/container/thankyou/optionFour";

export const metadata = {
  title: "Thank you",
};

export default function Page({ searchParams }) {
  const { email, checkout_session_id } = searchParams;
  return <ThankYouViewFour />;
}
