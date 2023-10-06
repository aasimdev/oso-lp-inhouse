import React from "react";
import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Thank you"
};

export default function Page({ searchParams }) {
  const { email } = searchParams;

  return (
    <>
      <Script
        id="Google-conversion-tracking"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `gtag('event', 'conversion', {'send_to': 'AW-11336429150/ZSh_CP7LseUYEN7c0J0q'});`,
        }}
      />
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
      <section className="min-h-[50vh] flex items-center justify-center">
        <div className="flex flex-col gap-4 justify-center text-center">
          <h1 className="text-3xl font-semibold text-center leading-relaxed">
            Congrats! <span className="block text-2xl"> You will soon be among the first to experience the power of
            OSO. </span>
          </h1>
          <Link href="/" className="!py-[11px] !px-[12.25px] !text-base !w-[137px] theme-btn mx-auto">Back to home</Link>
        </div>

      </section>
    </>
  );
};
