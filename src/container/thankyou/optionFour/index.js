"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ModalComponent from "@/components/modal/Modal";
import VideoThankyouModal from "@/components/VideoThankyouModal";
import Script from "next/script";

const ThankYouViewFour = ({ email, checkoutSessionId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [userEmail, setUserEmail] = useState();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    (async () => {
      if (checkoutSessionId) {
        const res = await fetch("/api/stripe-checkout-data", {
          method: "POST",
          body: JSON.stringify({
            checkoutSessionId,
          }),
        });

        try {
          const userEmail = await res.json();
          const { customerEmail, isMonthly } = userEmail?.data;
          setUserEmail(customerEmail);
          if (customerEmail && isMonthly !== null) {
            await fetch("/api/active-campaign-event", {
              method: "POST",
              body: JSON.stringify({
                event: isMonthly
                  ? "Purchased Monthly Subscription"
                  : "Purchased Yearly Subscription",
                email: customerEmail,
              }),
            });
          }
          if (customerEmail && typeof rewardful === "function") {
            window.rewardful("convert", { email: customerEmail });
          }
        } catch (error) {
          console.error("Error fetching user email:", error);
        }
      }
    })();
  }, [checkoutSessionId]);

  return (
    <>
      <Script
        id="Meta-conversion-tracking"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: `fbq('track', 'Conversion');` }}
      />
      <Script
        strategy="lazyOnload"
        id="google-analytics-event-conversion"
        dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V2Y9R8B57Y');
            gtag('event', 'Conversion')`,
        }}
      />
      <Script
        type="text/javascript"
        id="thankyou-viewfour-script"
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
            vgo('setEmail', '${userEmail}');
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
          <div className="flex flex-col justify-center items-center gap-4 mx-2">
            <div className="max-w-[533px]">
              <div className="w-[532px] text-start md:text-center font-extrabold text-black text-[32px]">
                Thank you for subscribing to OSO Pro.
              </div>
              <p className="w-[532px] text-start md:text-center text-gray-800 text-2xl font-light pt-4">
                You will soon receive an email with steps to unlock early access
                to OSO Uncensored Chat.
              </p>
            </div>
            <div>
              <p className="max-w-[533px] text-start md:text-center text-gray-800 text-xl font-bold pt-4">
                Make sure to join the community.
              </p>
            </div>

            <div className="flex flex-row gap-1 md:gap-4 items-center">
              <Link
                href="https://www.facebook.com/profile.php?id=100095431967672"
                className="px-1 md:px-4 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="50"
                  viewBox="0 0 51 50"
                  fill="none"
                >
                  <path
                    d="M46.3332 25.1267C46.3332 13.5503 37.0068 4.16699 25.4998 4.16699C13.9929 4.16699 4.6665 13.5503 4.6665 25.1267C4.6665 35.5906 12.2832 44.2614 22.2443 45.8337V31.1864H16.9554V25.1253H22.2443V20.5087C22.2443 15.2559 25.354 12.3531 30.1137 12.3531C32.3915 12.3531 34.7776 12.7628 34.7776 12.7628V17.9212H32.1484C29.5609 17.9212 28.7554 19.5378 28.7554 21.1962V25.1267H34.5332L33.6096 31.185H28.7554V45.8337C38.7165 44.2614 46.3332 35.5906 46.3332 25.1267Z"
                    fill="#8E33FF"
                  />
                </svg>
              </Link>
              <Link
                href="https://twitter.com/osocentral"
                className="px-1 md:px-4 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <g clip-path="url(#clip0_3547_10667)">
                    <path
                      d="M0.578019 0L12.9329 17.6499L0.5 32H3.29814L14.1831 19.4363L22.9778 32H32.5L19.45 13.3573L31.0224 0H28.2243L18.1998 11.571L10.1002 0H0.578019ZM4.69289 2.20214H9.0674L28.3845 29.7975H24.01L4.69289 2.20214Z"
                      fill="#8E33FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3547_10667">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/oso_central/"
                className="px-1 md:px-4 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="50"
                  viewBox="0 0 51 50"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.5 6.25C20.4075 6.25 19.77 6.27125 17.77 6.3625C15.7738 6.45375 14.41 6.77125 13.2175 7.235C11.9675 7.705 10.8337 8.4425 9.89625 9.3975C8.94278 10.3339 8.20482 11.4669 7.73375 12.7175C7.2725 13.91 6.95375 15.275 6.8625 17.2713C6.7725 19.27 6.75 19.9062 6.75 25C6.75 30.0938 6.77125 30.73 6.8625 32.73C6.95375 34.7262 7.27125 36.09 7.735 37.2825C8.205 38.5325 8.9425 39.6662 9.8975 40.6037C10.8339 41.5572 11.9669 42.2951 13.2175 42.7663C14.41 43.2287 15.7738 43.5462 17.77 43.6375C19.77 43.7287 20.4075 43.75 25.5 43.75C30.5925 43.75 31.23 43.7287 33.23 43.6375C35.2262 43.5462 36.59 43.2287 37.7825 42.765C39.0325 42.295 40.1662 41.5575 41.1037 40.6025C42.0572 39.6661 42.7952 38.5331 43.2663 37.2825C43.7287 36.09 44.0462 34.7262 44.1375 32.73C44.2287 30.73 44.25 30.0925 44.25 25C44.25 19.9075 44.2287 19.27 44.1375 17.27C44.0462 15.2738 43.7287 13.91 43.265 12.7175C42.7943 11.4663 42.0563 10.3329 41.1025 9.39625C40.1661 8.44278 39.0331 7.70482 37.7825 7.23375C36.59 6.7725 35.225 6.45375 33.2288 6.3625C31.23 6.2725 30.5938 6.25 25.5 6.25ZM25.5 9.62875C30.5063 9.62875 31.1 9.6475 33.0775 9.7375C34.905 9.82125 35.8975 10.125 36.5588 10.3837C37.4338 10.7225 38.0588 11.13 38.715 11.785C39.3713 12.4412 39.7775 13.0662 40.1162 13.9412C40.3738 14.6025 40.6787 15.595 40.7625 17.4225C40.8525 19.4 40.8713 19.9937 40.8713 25C40.8713 30.0063 40.8525 30.6 40.7625 32.5775C40.6787 34.405 40.375 35.3975 40.1162 36.0588C39.8162 36.8732 39.3373 37.61 38.715 38.215C38.1101 38.8375 37.3733 39.3163 36.5588 39.6162C35.8975 39.8738 34.905 40.1787 33.0775 40.2625C31.1 40.3525 30.5075 40.3713 25.5 40.3713C20.4925 40.3713 19.9 40.3525 17.9225 40.2625C16.095 40.1787 15.1025 39.875 14.4412 39.6162C13.6268 39.3162 12.89 38.8373 12.285 38.215C11.6627 37.6099 11.1839 36.8731 10.8837 36.0588C10.6262 35.3975 10.3212 34.405 10.2375 32.5775C10.1475 30.6 10.1288 30.0063 10.1288 25C10.1288 19.9937 10.1475 19.4 10.2375 17.4225C10.3212 15.595 10.625 14.6025 10.8837 13.9412C11.2225 13.0662 11.63 12.4412 12.285 11.785C12.8899 11.1626 13.6268 10.6837 14.4412 10.3837C15.1025 10.1262 16.095 9.82125 17.9225 9.7375C19.9 9.6475 20.4937 9.62875 25.5 9.62875Z"
                    fill="#8E33FF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.4998 31.2561C24.6782 31.2561 23.8647 31.0942 23.1056 30.7798C22.3466 30.4654 21.6569 30.0046 21.076 29.4236C20.495 28.8427 20.0342 28.153 19.7198 27.394C19.4054 26.6349 19.2436 25.8214 19.2436 24.9998C19.2436 24.1782 19.4054 23.3647 19.7198 22.6056C20.0342 21.8466 20.495 21.1569 21.076 20.576C21.6569 19.995 22.3466 19.5342 23.1056 19.2198C23.8647 18.9054 24.6782 18.7436 25.4998 18.7436C27.1591 18.7436 28.7504 19.4027 29.9236 20.576C31.0969 21.7492 31.7561 23.3405 31.7561 24.9998C31.7561 26.6591 31.0969 28.2504 29.9236 29.4236C28.7504 30.5969 27.1591 31.2561 25.4998 31.2561ZM25.4998 15.3623C22.9438 15.3623 20.4924 16.3777 18.6851 18.1851C16.8777 19.9924 15.8623 22.4438 15.8623 24.9998C15.8623 27.5558 16.8777 30.0072 18.6851 31.8145C20.4924 33.6219 22.9438 34.6373 25.4998 34.6373C28.0558 34.6373 30.5072 33.6219 32.3145 31.8145C34.1219 30.0072 35.1373 27.5558 35.1373 24.9998C35.1373 22.4438 34.1219 19.9924 32.3145 18.1851C30.5072 16.3777 28.0558 15.3623 25.4998 15.3623ZM37.941 15.1873C37.941 15.7915 37.701 16.371 37.2738 16.7982C36.8466 17.2254 36.2671 17.4654 35.6629 17.4654C35.0587 17.4654 34.4793 17.2254 34.052 16.7982C33.6248 16.371 33.3848 15.7915 33.3848 15.1873C33.3848 14.5831 33.6248 14.0037 34.052 13.5764C34.4793 13.1492 35.0587 12.9092 35.6629 12.9092C36.2671 12.9092 36.8466 13.1492 37.2738 13.5764C37.701 14.0037 37.941 14.5831 37.941 15.1873Z"
                    fill="#8E33FF"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@osoCentral"
                className="px-1 md:px-4 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="50"
                  viewBox="0 0 51 50"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M41.7333 11.281C43.5251 11.7624 44.9425 13.1798 45.4239 14.9716C46.3064 18.2343 46.3332 25.0005 46.3332 25.0005C46.3332 25.0005 46.3332 31.7934 45.4506 35.0294C44.9692 36.8212 43.5518 38.2386 41.76 38.72C38.524 39.6025 25.4998 39.6025 25.4998 39.6025C25.4998 39.6025 12.4757 39.6025 9.23968 38.72C7.44785 38.2386 6.03043 36.8212 5.54905 35.0294C4.6665 31.7666 4.6665 25.0005 4.6665 25.0005C4.6665 25.0005 4.6665 18.2343 5.5223 14.9984C6.00369 13.2065 7.4211 11.7891 9.21293 11.3077C12.4489 10.4252 25.4731 10.3984 25.4731 10.3984C25.4731 10.3984 38.4973 10.3984 41.7333 11.281ZM32.1323 25.0005L21.3278 31.2585V18.7425L32.1323 25.0005Z"
                    fill="#8E33FF"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.tiktok.com/@osocentral?lang=en"
                className="px-1 md:px-4 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="50"
                  viewBox="0 0 51 50"
                  fill="none"
                >
                  <path
                    d="M38.2406 12.5189C35.9962 11.0556 34.3762 8.71411 33.8709 5.98462C33.7617 5.3949 33.7018 4.78797 33.7018 4.16699H26.5384L26.5269 32.8752C26.4065 36.0901 23.7606 38.6703 20.5169 38.6703C19.5088 38.6703 18.5595 38.4183 17.7237 37.9784C15.807 36.9698 14.4954 34.9608 14.4954 32.6489C14.4954 29.3285 17.1968 26.6271 20.5169 26.6271C21.1367 26.6271 21.7312 26.7293 22.2936 26.9055V19.5925C21.7116 19.5132 21.1203 19.4637 20.5169 19.4637C13.2466 19.4637 7.33203 25.3786 7.33203 32.6489C7.33203 37.1095 9.56069 41.057 12.9607 43.444C15.1024 44.9476 17.7074 45.8337 20.5169 45.8337C27.7872 45.8337 33.7018 39.9191 33.7018 32.6489V18.0913C36.5113 20.1079 39.9535 21.2962 43.6678 21.2962V14.1328C41.667 14.1328 39.8035 13.538 38.2406 12.5189Z"
                    fill="#8E33FF"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {isOpen && (
        <>
          <ModalComponent modalIsOpen={isOpen} closeModal={closeModal}>
            <VideoThankyouModal videoId="3P2kUgeqGjw" />
          </ModalComponent>
        </>
      )}
    </>
  );
};

export default ThankYouViewFour;
