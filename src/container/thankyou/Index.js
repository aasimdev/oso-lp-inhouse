"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Script from "next/script";
import React, { useEffect, useState } from "react";

const ThankYouView = ({ email, checkoutSessionId }) => {
  const [previousPageUrl, setPreviousPageUrl] = useState("/");

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



      <section className="flex items-center justify-center pt-28 md:pt-40 px-6 md:px-0">
        <div className="flex flex-col justify-center md:text-center max-w-[532px]">
          {previousPageUrl === "/search" ? (
            <>
              <h1 className="text-3xl font-black md:text-center mb-4 md:mb-8">
                {'We\'re'} thrilled to have you onboard!
              </h1>

              <p className="text-gray-800 text-2xl font-light mb-4 md:mb-8">
        OSO is about to get exciting, and we {'don\'t'} want you or your friends to miss out.{" "}
                </p>
      <p className="text-gray-800 text-2xl font-light">
        Invite your friends to join the waitlist and <strong>earn $5/month forever</strong>
        <span className="hide-on-mobile"><br /></span> {/* This break will only show on desktop */}
        for <strong>each friend</strong> that subscribes to OSO Pro after launch.
      </p>
              <div className="mt-12 md:mt-16 flex flex-col-reverse md:flex-row gap-2 md:gap-6">
                <Link
                  href="/"
                  className="theme-btn mx-auto !bg-white !text-purple !border-2"
                >
                  No thanks
                </Link>
                  <Link
                  href="https://friends.oso.ai/signup"
                  target="_blank"
                  className="theme-btn mx-auto"
                >
                  <span>Invite Friends</span>
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
            </>
          ) : (
            <>
              <h1 className="text-3xl font-black md:text-center mb-4 md:mb-8">
               {'We\'re'} thrilled to have you onboard!
              </h1>
             <p className="text-gray-800 text-2xl font-light mb-4 md:mb-8">
        OSO is about to get exciting, and we {'don\'t'} want you or your friends to miss out.{" "}
                </p> 
      <p className="text-gray-800 text-2xl font-light">
        Invite your friends to join the waitlist and <strong>earn $5/month forever</strong>
        <span className="hide-on-mobile"><br /></span> {/* This break will only show on desktop */}
        for <strong>each friend</strong> that subscribes to OSO Pro after launch.
      </p>

              <div className="mt-8 md:mt-16 flex flex-col-reverse md:flex-row gap-2 md:gap-6">
                <Link
                  href="/"
                  className="theme-btn mx-auto !bg-white !text-purple !border-2"
                >
                  No thanks
                </Link>
                <Link
                  href="https://friends.oso.ai/signup"
                  target="_blank"
                  className="theme-btn mx-auto"
                >
                  <span>Invite Friends</span>
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
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ThankYouView;
