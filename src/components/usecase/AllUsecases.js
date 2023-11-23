import React, { useMemo } from "react";
import TikTokEmbed from "./TikTokEmbed";

const AllUsecases = ({ videoData }) => {
  const memoizedTikTokEmbedComponents = useMemo(() => {
    return videoData.map((v, i) => (
      <TikTokEmbed key={i} videoId={v.videoId} category={v.category} />
    ));
  }, [videoData]);

  return (
    <section className="py-6 sm:py-8 mx-auto max-w-6xl">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memoizedTikTokEmbedComponents}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllUsecases;
