"use client";
import Video from "@/components/VideoThankyou";
import ModalComponent from "@/components/modal/Modal";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
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
      if (email) {
        await fetch("/api/active-campaign-event", {
          method: "POST",
          body: JSON.stringify({
            event: "Viewed Annual Sales Page",
            email,
          }),
        });
      }
    })();
  }, [email]);

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
        dangerouslySetInnerHTML={{ __html: "fbq('track', 'Lead');" }}
      />
      {/* <!-- Twitter conversion tracking event code -->  */}

      <Script
        id="twitter-conversion-tracking-event-1"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `twq('event', 'tw-ogmtw-ogmtz', {
        email_address: '${email}'
    });`,
        }}
      />

      <Script
        id="twitter-conversion-tracking-event-2"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `twq('event', 'tw-oha7k-oha7m', {
        email_address: '${email}'
    });`,
        }}
      />

      <Script
        strategy="lazyOnload"
        id="google-analytics-event-lead"
        dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
      
            gtag('config', 'G-V2Y9R8B57Y');
            gtag('event', 'Lead')`,
        }}
      />
      <Script
        type="text/javascript"
        id="waitlist-submission-script"
        dangerouslySetInnerHTML={{
          __html: `
            (function(e,t,o,n,p,r,i){
              e.visitorGlobalObjectAlias=n;
              e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){
                (e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)
              };
              e[e.visitorGlobalObjectAlias].l=(new Date).getTime();
              r=t.createElement("script");
              r.src=o;
              r.async=true;
              i=t.getElementsByTagName("script")[0];
              i.parentNode.insertBefore(r,i)
            })(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");

            vgo('setAccount', '801867771');
            vgo('setTrackByDefault', true);
            vgo('setEmail', '${email}');
            vgo('process');
          `,
        }}
      />
      <Script
        strategy="lazyOnload"
        id="hotjar-tracking-script"
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:3734391,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
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
                You&apos;ve joined us early, before the buzz and the viral
                explosion. To show our appreciation for your trust in us,
                we&apos;re offering early supporters the chance to get{" "}
                <span className="font-medium">pre-release access</span> to OSO
                Uncensored Chat.
                <br /> <br />
                <span className="text-gray-800 text-base font-semibold">
                  Special Perks
                </span>
                <br />
                <span className="text-gray-800 text-base font-normal">
                  💼 Shape the future of OSO with feedback and suggestions.
                  <br />
                  🚀 Pre-release access to OSO Uncensored.
                  <br />
                  🌟 Join a private tester community with direct OSO team
                  access.
                </span>
              </p>
              <div className="flex flex-col-reverse gap-2">
                <Link
                  href="https://buy.stripe.com/28o4hc0WjeF1bPWfYZ"
                  className="theme-btn2 mx-auto !bg-white !text-purple !border-2"
                >
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
                videoId="Oz90MdjxDLA"
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
          <VideoThankyouModal videoId="Oz90MdjxDLA" />
        </ModalComponent>
      )}
    </>
  );
};

export default ThankYouView;
