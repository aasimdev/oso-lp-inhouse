import dynamic from "next/dynamic";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "OSO News",
  description: "OSO's interactive AI news helps you stay informed effortlessly with your own personal AI Reporter.",
  keywords: "AI News, AI reporter, OSO News, AI powered news, news summary, interactive news, AI news updates, AI news reporter, OSO AI News",
};

const DynamicMarkdownView = dynamic(() => import("@/container/markdown/index"), {
  ssr: false,
});

export default function page() {
  return (
    <>
      <DynamicMarkdownView />
    </>
  );
}
