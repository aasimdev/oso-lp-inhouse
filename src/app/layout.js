"use client"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import "./globals.css"
import { MenuProvider, useMenu } from "@/context/MenuContext"
import Script from "next/script"
import { useEffect, useState } from "react"
import gsap from "gsap"
import Loader from "@/components/loader"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import Image from "next/image"

export default function RootLayout({ children }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false,
        defer: true,
        appendTo: "body",
        nonce: undefined,
      }}
    >
      <MenuProvider>
        <RootLayoutContent>{children}</RootLayoutContent>
      </MenuProvider>
    </GoogleReCaptchaProvider>
  )
}

function RootLayoutContent({ children }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Use GSAP to animate the loader out
      gsap.to(".loader", {
        duration: 0.5, // Animation duration
        opacity: 0, // Fade out opacity
        scale: 0.5, // Zoom out to 50% of original size
        onComplete: () => {
          setLoading(true) // Set loading to true after the animation completes
          // Use GSAP to animate the content in
          gsap.fromTo(".content", { opacity: 0 }, { duration: 0.5, opacity: 1 })
        },
      })
    }, 1500)
    return () => clearTimeout(timer)
  }, [])
  const { showSidebar } = useMenu("")
  return (
    <html lang='en'>
      <head>
        {/* <-- Global site tag (gtag.js) - Google Analytics --> */}
          <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=AW-11336429150'
        ></Script>
        <Script
          id='google-ads-tag'
          strategy='lazyOnload'
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date()); 
          gtag('config', 'AW-11336429150');`,
          }}
        />

        {/* <!-- Meta Pixel Code --> */}

        <Script
          id='meta-pixel-code'
          strategy='lazyOnload'
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1321535528493263');
            fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <Image
            height='1'
            width='1'
            alt="facebook"
            style={{ display: "none" }}
            src='https://www.facebook.com/tr?id=1321535528493263&ev=PageView&noscript=1'
          />
        </noscript>

        {/* <!-- Twitter conversion tracking base code --> */}
        <Script
          strategy='lazyOnload'
          id='twitter-conversion-tracking'
          dangerouslySetInnerHTML={{
            __html: `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
              },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
              twq('config','ogmtw');`,
          }}
        />

        <Script
          strategy='lazyOnload'
          id='tiktok-analytics'
          dangerouslySetInnerHTML={{
            __html: `!function (w, d, t) { w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group",
              "enableCookie","disableCookie"],
              ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
              for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
              ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){
                var i="https://analytics.tiktok.com/i18n/pixel/events.js";
                ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
                var o=document.createElement("script");
                o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;
                var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)}; 
                ttq.load('CK8TLQBC77UDMU34NFGG'); ttq.page(); }(window, document, 'ttq');`,
          }}
        />
        {/* google analytics */}
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-V2Y9R8B57Y'
        ></Script>

        <Script
          strategy='lazyOnload'
          id='google-analytics'
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
      
            gtag('config', 'G-V2Y9R8B57Y');`,
          }}
        />
      </head>
      <body className={`${showSidebar ? "overflow-hidden md:pr-[17px]" : ""}`}>
        <Script
          id='hotjar-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: ` (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3669782,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        />
        <div className='loader'>{!loading && <Loader />}</div>
        <div className='content'>
          {loading && (
            <>
              <Header />
              {children}
              <Footer />
            </>
          )}
        </div>
      </body>
    </html>
  )
}
