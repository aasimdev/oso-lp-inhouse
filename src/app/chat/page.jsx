import dynamic from "next/dynamic";

export const metadata = {
  title: "OSO Chat",
  description: "OSO Chat sets a new standard for AI chatbots",
  keywords: "AI Search, Uncensored AI, Unbiased AI, OSO Search, up to date AI",
};

const DynamicChatView = dynamic(() => import("@/container/chat/Index"), {
  ssr: false,
});

const ChatPage = () => {
  return <DynamicChatView />;
};

export default ChatPage;
