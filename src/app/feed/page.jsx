import dynamic from "next/dynamic";

export const metadata = {
  title: "OSO News",
  description:
    "OSO's interactive AI news helps you stay informed effortlessly with your own personal AI Reporter.",
  keywords:
    "AI News, AI reporter, OSO News, AI powered news, news summary, interactive news, AI news updates, AI news reporter, OSO AI News",
};

const DynamicFeedView = dynamic(() => import("@/container/feed/Index"), {
  ssr: false,
});

const FeedPage = () => {
  return <DynamicFeedView />;
};

export default FeedPage;
