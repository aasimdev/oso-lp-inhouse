import React, { useMemo, useEffect, useRef, useState } from "react";
import UseCaseCard from "../usecaseCard";

const AllUsecases = ({ videoData }) => {
  const containerRefs = useRef([]);
  const [loadedVideos, setLoadedVideos] = useState([]);
  const [videosToShow, setVideosToShow] = useState(9);

  const memoizedTikTokEmbedComponents = useMemo(() => {
    return videoData.slice(0, videosToShow).map((v, i) => {
      containerRefs.current[i] = containerRefs.current[i] || React.createRef();
      return (
        <div key={i} ref={containerRefs.current[i]}>
          {loadedVideos.includes(i) && (
            <div key={i} ref={containerRefs.current[i]}>
              {loadedVideos.includes(i) && (
                <UseCaseCard
                  videoId={v.videoId}
                  category={v.category}
                  title={v.title}
                />
              )}
            </div>
          )}
        </div>
      );
    });
  }, [videoData, loadedVideos, containerRefs, videosToShow]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (index) => (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !loadedVideos.includes(index)) {
          console.log(`Video at index ${index} is in view`);
          if (loadedVideos.length <= videoData.length) {
            setLoadedVideos((prev) => [...prev, index]);
          }
        }
      });
    };

    containerRefs.current.forEach((containerRef, index) => {
      const currentContainer = containerRef.current;

      const observer = new IntersectionObserver(
        handleIntersection(index),
        options
      );

      if (currentContainer) {
        observer.observe(currentContainer);
      }

      return () => {
        if (currentContainer) {
          observer.unobserve(currentContainer);
        }
      };
    });
  }, [containerRefs, loadedVideos, videoData.length]);

  const handleViewMore = () => {
    setVideosToShow((prev) => prev + 3);
  };

  return (
    <>
      <section className="py-6 sm:py-8 mx-auto max-w-6xl">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memoizedTikTokEmbedComponents}
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
