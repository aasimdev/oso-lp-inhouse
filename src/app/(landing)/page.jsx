import React from "react"
// import LandingPage from "../../container/landing"
import Loader from "@/components/loader";
import dynamic from "next/dynamic";

export const metadata = {
  title: "OSO",
  description: "A new way to use the internet. Try OSO's next generation AI Search Engine. ",
  keywords: "AI Search, AI Search Engine, web summarizer, website summary tool, Uncensored AI, Unbiased AI, OSO Search, up to date AI",
}

const DynamicHomePageView = dynamic(() => import('@/container/landing'), {
  ssr: false
});


export default function Homepage() {
  return <DynamicHomePageView />
}
