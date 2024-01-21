import React, { useMemo, useState, useEffect, useRef } from "react";
import { shortVideosData } from "@/constant/usecase";
import Link from "next/link";
import ShortVideo from "../usecase/ShortVideo";

const TopThreeUsecase = () => {
  const [startVideo, setStartVideo] = useState(false);
  const containerTop3Ref = useRef(null);

  const handleClick = () => {};

  const videoData = useMemo(() => {
    return shortVideosData.filter((v) => v.type.includes("top3"));
  }, []);

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

    const currentContainer = containerTop3Ref.current;

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
      ref={containerTop3Ref}
      className="py-6 px-6 md:pt-16 mx-auto max-w-6xl"
    >
      <div className="flex flex-col md:gap-4 gap-2 justify-center items-center">
        <h1 className="text-[40px] md:text-5xl md:text-center font-bold md:font-extrabold leading-[56px] md:leading-[64px] text-black">
          Top 3 most used cases
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 md:py-12">
        {startVideo && memoizedTikTokEmbedComponents}
      </div>
      <div className="flex justify-center items-center pb-6 md:pt-8 w-full">
        <Link
          href="https://l.oso.ai/prod"
          className="tryOSOButton bg-purple text-white text-2xl font-normal rounded-lg"
          onClick={handleClick}
        >
          Try OSO
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default TopThreeUsecase;
