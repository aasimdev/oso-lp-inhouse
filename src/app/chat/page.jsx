import dynamic from "next/dynamic"
import Script from "next/script"
import React from "react"

export const metadata = {
  title: "OSO Search",
  description: "Uncensored AI Search connected to the internet. ",
  keywords: "AI Search, Uncensored AI, Unbiased AI, OSO Search, up to date AI",
}

const DynamicChatView = dynamic(() => import("@/container/chat/Index"), {
  ssr: false,
})

const ChatPage = () => {
  return <DynamicChatView />
}

export default ChatPage
