"use client"
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer';
import './globals.css'
import { MenuProvider, useMenu } from '@/context/MenuContext';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <MenuProvider>
      <RootLayoutContent>{children}</RootLayoutContent>
    </MenuProvider>
  )
}


function RootLayoutContent({ children }) {
  const { showSidebar } = useMenu("");
  return (
    <html lang="en">
      <body
        className={`${showSidebar ? 'overflow-hidden md:pr-[17px]' : ''}`}
      >
        <Script id="hotjar-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: ` (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3669782,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
        }} />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}