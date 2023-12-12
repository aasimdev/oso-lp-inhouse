import React, { useEffect, useRef, useState } from "react";
import UseCaseCard from "../usecaseCard";

const AllUsecases = ({ videoData }) => {
  const [videosToShow, setVideosToShow] = useState(9);

  const handleViewMore = () => {
    setVideosToShow((prev) => prev + 3);
  };

  return (
    <>
      <section className="py-6 sm:py-8 mx-auto max-w-6xl">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoData.slice(0, videosToShow).map((v, i) => {
                return (
                  <div key={i}>
                    <UseCaseCard
                      key={i}
                      videoId={v.videoId}
                      category={v.category}
                      title={v.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {videosToShow < videoData.length && (
        <div className="flex justify-center items-center py-6 md:py-8 gap-4 mt-4 md:mt-8">
          <button
            className="bg-transparent text-purple border border-purple text-2xl font-normal px-4 md:px-16 h-[74px] rounded-lg justify-center items-center flex gap-2"
            onClick={handleViewMore}
          >
            View more
          </button>
        </div>
      )}
    </>
  );
};

export default AllUsecases;
