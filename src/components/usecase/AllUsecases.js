import React from "react";
import EmbeddedTiktok from "./TikTokEmbed";

const AllUsecases = ({ videoData }) => {

  return (
    <section className="py-6 sm:py-8 mx-auto max-w-6xl">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoData.map((v, i) => {
              return (
                <EmbeddedTiktok
                  key={i}
                  videoId={v.videoId}
                  category={v.category}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllUsecases;
