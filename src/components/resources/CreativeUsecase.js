import React, { useMemo, useState, useEffect, useRef } from "react";  
import TikTokEmbed from "../usecase/TikTokEmbed";
import { tiktokVideosData } from "@/constant/usecase";

const CreativeUsecase = () => {
  const [startVideo, setStartVideo] = useState(false);
  const videoData = useMemo(() => {
    return tiktokVideosData.filter((v) => v.type.includes("creative-oso"));
  }, []);

  const containerRef = useRef(null);

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // console.log("CreativeUsecase---------------", startVideo);

  const memoizedTikTokEmbedComponents = useMemo(() => {
    return videoData?.map((v, i) => (
      <TikTokEmbed key={i} videoId={v.videoId} category={v.category} />
    ));
  }, [videoData]);
  return (
    <section
      ref={containerRef}
      className="py-6 px-6 md:pt-16 mx-auto max-w-6xl"
    >
      <div className="px-6 flex flex-col md:gap-4 gap-2 justify-center items-center">
        <h1 className="text-[40px] md:text-5xl md:text-center font-bold md:font-extrabold leading-[56px] md:leading-[64px] text-black">
          Creative ways to use OSO
        </h1>
      </div>
      <div className="flex flex-col py-8 md:py-12">
        <div className="md:mx-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startVideo && memoizedTikTokEmbedComponents}
        </div>
      </div>
    </section>
  );
};

export default CreativeUsecase;
