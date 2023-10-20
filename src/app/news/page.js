import dynamic from "next/dynamic";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "OSO News",
  description: "Uncensored AI Search connected to the internet. ",
  keywords: "AI Search, Uncensored AI, Unbiased AI, OSO Search, up to date AI",
};

const DynamicNewsView = dynamic(() => import("@/container/news/Index"), {
  ssr: false,
});

export default function page() {
  return (
    <>
      <DynamicNewsView />
    </>
  );
}
