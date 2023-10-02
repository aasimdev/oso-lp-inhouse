"use client";
import React, { useEffect } from "react";
import Script from "next/script";

const Page = ({ searchParams }) => {
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
        <h2 className="text-2xl font-semibold text-center mt-12">
          Congrats! You will soon be among the first to experience the power of
          OSO.
        </h2>
      </section>
    </>
  );
};

export default Page;
