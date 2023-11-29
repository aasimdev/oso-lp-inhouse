import React, { useMemo, useEffect, useRef, useState } from "react";
import TikTokEmbed from "./ShortVideo";
import UseCaseCard from "../usecaseCard";

const AllUsecases = ({ videoData }) => {
  const containerRefs = useRef([]);
  const [loadedVideos, setLoadedVideos] = useState([]);

  // console.log("--------loaded videos", loadedVideos);

  const memoizedTikTokEmbedComponents = useMemo(() => {
    return videoData.map((v, i) => {
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
  }, [videoData, loadedVideos, containerRefs]);

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
