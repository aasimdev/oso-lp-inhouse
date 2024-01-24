import dynamic from "next/dynamic";

export const metadata = {
  title: "OSO Search",
  description: "Uncensored AI Search connected to the internet. ",
  keywords: "AI Search, Uncensored AI, Unbiased AI, OSO Search, up to date AI",
};

const DynamicSearchView = dynamic(() => import("@/container/search/Index"), {
  ssr: false,
});

export default function page() {
  return (
    <>
      <DynamicSearchView />
    </>
  );
}
