"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import React, { useEffect, useState } from 'react'

const ThankYouView = ({ email }) => {
    const [previousPageUrl, setPreviousPageUrl] = useState('/');

    useEffect(() => {
        const storedPreviousPageUrl = localStorage.getItem('submitedURL');
        if (storedPreviousPageUrl) {
            setPreviousPageUrl(storedPreviousPageUrl);

            const timeoutId = setTimeout(() => {
                localStorage.removeItem('submitedURL');
                setPreviousPageUrl('/');
            }, 120000);

            return () => clearTimeout(timeoutId);
        }
    }, []);
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
            <section className="bg-gradient-to-b from-purple-400 flex items-center justify-center pt-28 md:pt-40 px-6 md:px-0">
                <div className="flex flex-col justify-center md:text-center max-w-[532px]">
                    {previousPageUrl === "/search" ?
                        <>
                            <h1 className="text-3xl font-black md:text-center mb-2 md:mb-4">
                                Congrats!
                            </h1>
                            <p className="text-gray-800 text-2xl font-light">You will soon be among the first to experience the power of OSO. <br />
                                In the mean-time, we invite you to test the iOS app and provide feedback to influence OSO&apos;s future.</p>
                            <div className="mt-8 md:mt-16 flex flex-col-reverse md:flex-row gap-2 md:gap-6">
                                <Link href="/" className="theme-btn mx-auto !bg-white !text-purple !border-2">Back to home</Link>
                                <Link href="https://l.oso.ai/OSOIOSBeta" target="_blank" className="theme-btn mx-auto">
                                    <span>Join Testflight</span>
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
                                    </svg></Link>
                            </div>
                        </>
                        : <>
                            <h1 className="text-3xl font-black md:text-center mb-2 md:mb-4">
                                Congrats!
                            </h1>
                            <p className="text-gray-800 text-2xl font-light">You will soon be among the first to experience the power of OSO.</p>
                            <div className="mt-8 md:mt-16 flex flex-col-reverse md:flex-row gap-2 md:gap-6">
                                <Link href="/" className="theme-btn mx-auto !bg-white !text-purple !border-2">Back to home</Link>
                            </div>
                        </>
                    }


                </div>

            </section>
        </>
    )
}

export default ThankYouView