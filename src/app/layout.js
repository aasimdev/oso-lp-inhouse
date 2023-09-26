"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { MenuProvider, useMenu } from "@/context/MenuContext";
import Script from "next/script";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Loader from "@/components/loader";

export default function RootLayout({ children }) {
  return (
    <MenuProvider>
      <RootLayoutContent>{children}</RootLayoutContent>
    </MenuProvider>
  );
}

function RootLayoutContent({ children }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      // Use GSAP to animate the loader out
      gsap.to(".loader", {
        duration: 0.5, // Animation duration
        opacity: 0, // Fade out opacity
        scale: 0.5, // Zoom out to 50% of original size
        onComplete: () => {
          setLoading(true); // Set loading to true after the animation completes
          // Use GSAP to animate the content in
          gsap.fromTo(
            ".content",
            { opacity: 0 },
            { duration: 0.5, opacity: 1 }
          );
        },
      });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const { showSidebar } = useMenu("");
  return (
    <html lang="en">
      <body className={`${showSidebar ? "overflow-hidden md:pr-[17px]" : ""}`}>
        <Script
          id="hotjar-analytics"
          strategy="afterInteractive"
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
        ;<div className="loader">{!loading && <Loader />}</div>
        <div className="content">
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
  );
}
