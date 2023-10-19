import dynamic from "next/dynamic"
import Script from "next/script"
import React from "react"

export const metadata = {
  title: "OSO Feed",
  description: "Uncensored AI Search connected to the internet. ",
  keywords: "AI Search, Uncensored AI, Unbiased AI, OSO Search, up to date AI",
}

const DynamicFeedView = dynamic(() => import("@/container/feed/Index"), {
  ssr: false,
})

const FeedPage = () => {
  return <DynamicFeedView />
}

export default FeedPage
