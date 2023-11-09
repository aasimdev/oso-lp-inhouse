"use client";
import Video from "@/components/VideoThankyou";
import ModalComponent from "@/components/modal/Modal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import VideoThankyouModal from "@/components/VideoThankyouModal";
const ThankYouView = ({ email, checkoutSessionId }) => {
  const [previousPageUrl, setPreviousPageUrl] = useState("/");
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const storedPreviousPageUrl = localStorage.getItem("submitedURL");
    if (storedPreviousPageUrl) {
      setPreviousPageUrl(storedPreviousPageUrl);

      const timeoutId = setTimeout(() => {
        localStorage.removeItem("submitedURL");
        setPreviousPageUrl("/");
      }, 120000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (checkoutSessionId) {

        const res = await fetch("/api/stripe-checkout-data", {
          method: "POST",
          body: JSON.stringify({
            checkoutSessionId,
          }),
        });
        const sessionData = await res.json();
        const customerEmail = sessionData?.data?.customerEmail;
        if (customerEmail && typeof rewardful === "function") {
          window.rewardful("convert", { email: customerEmail });
        }
      }
    })();
  }, [checkoutSessionId]);

  return (
    <>
    <style jsx>{`
        @media (max-width: 768px) {
          .hide-on-mobile {
            display: none;
          }
        }
      `}</style>
      {/* <!-- Event snippet for Meta Lead --> */}
      <Script
        id="Meta-conversion-tracking"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: `fbq('track', 'Lead');` }}
      />
      {/* <!-- Twitter conversion tracking event code -->  */}
      <Script
        id="twitter-conversion-tracking"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `twq('event', 'tw-ogmtw-ogmtz', { 
              conversion_id: null,
                  (e.g. order id '1a2b3c') 
                  email_address: ${email}, 
                  phone_number: null  });`,
        }}
      />

      <section className="bg-gradient-to-b from-purple-400">
        <div className="px-6 mx-auto max-w-6xl pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:h-[480px]">
              <h1 className="text-[32px] font-bold">
                We&apos;re thrilled to have you onboard!
              </h1>
              <p className="text-2xl mt-4 mb-8 font-light text-gray-800">
                You&apos;ve joined us early, before the buzz and the viral explosion.
                To show our appreciation for your trust in us, we&apos;re offering
                early supporters the chance to get <span className="font-medium">pre-release access</span> to OSO
                Uncensored Chat.
                <br /> <br />
                <span className="text-gray-800 text-base font-semibold">
                  Special Perks
                </span>
                <br />
                <span className="text-gray-800 text-base font-normal">
                  💼 Monthly subscription at $8 (regularly $20/month).
                  <br />
                  🚀 Pre-release access to OSO Uncensored.
                  <br />
                  🌟 Join a private tester community with direct OSO team
                  access.
                </span>
              </p>
              <div className="flex flex-col-reverse gap-2">
                <Link href="/" className="theme-btn2 mx-auto !bg-white !text-purple !border-2">
                 <span> Claim Offer</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <Video
                videoId="FpWF0i0vxGs"
                openModal={openModal}
                isOpen={isOpen}
                modalValue={true}
                variant={"three"}
              />
            </div>
          </div>
        </div>
      </section>
      {isOpen && (
        <ModalComponent modalIsOpen={isOpen} closeModal={closeModal}>
          <VideoThankyouModal videoId="FpWF0i0vxGs" />
        </ModalComponent>
      )}
    </>

  );
};

export default ThankYouView;
