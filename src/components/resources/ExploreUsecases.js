import  { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { shortVideosData } from "@/constant/usecase";
import ShortVideo from "../usecase/ShortVideo";

const ExploreUsecases = () => {
  const [startVideo, setStartVideo] = useState(false);
  const containerExploreRef = useRef(null);
  const videoData = shortVideosData?.slice(0, 6);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Logic to start loading or displaying TikTok videos
          setStartVideo(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const currentContainer = containerExploreRef.current;

    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  const memoizedTikTokEmbedComponents = useMemo(() => {
    return videoData.map((v, i) => (
      
      <ShortVideo  key={i}
      videoId={v.videoId}
      category={v.category}
      title={v.title}/>
    ));
  }, [videoData]);

  return (
    <section
      ref={containerExploreRef}
      className="mx-auto max-w-6xl pt-6 md:pt-10"
    >
      <div className="flex flex-col md:gap-4 gap-2">
        <div className="mx-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startVideo && memoizedTikTokEmbedComponents}
        </div>
      </div>
      <div className="flex justify-center items-center py-6 md:py-8 gap-4 mt-4 md:mt-8">
        <Link
          className="bg-transparent text-purple border border-purple text-2xl font-normal px-4 md:px-16 h-[74px] rounded-lg justify-center items-center flex gap-2"
          href="/usecase"
        >
         Explore more use cases
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="arrow_forward">
              <path
                id="Vector"
                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                fill="#8E33FF"
              />
            </g>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default ExploreUsecases;
