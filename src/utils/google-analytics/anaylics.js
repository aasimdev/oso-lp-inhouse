"use client";

import Script from "next/script";

const GoogleAnalytics = ({ gaTrackingID }) => {
  console.log(gaTrackingID);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${gaTrackingID}');
                    `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
