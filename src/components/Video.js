import React, { useEffect, useRef, useState } from "react";

const Video = ({ src, videoId, variant }) => {
  const [handler, setHandler] = useState(true);
  const videoRef = useRef(null);
  const [preLoad, setPreLoad] = useState(false);

  const videoHandler = () => {
    setHandler(false);
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = false;
      video.play();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setPreLoad(true);
    }, 300);
  }, []);

  return (
    <div
      className={`${
        variant !== "newsBanner" ? "mt-8 md:mt-6" : "h-full flex"
      } mx-auto max-w-[902px] overflow-hidden text-center h-video relative`}
    >
      <div
        className={`w-full  ${
          variant === "newsBanner" ? "h-full" : "h-[507px]"
        } absolute left-0 top-0 right-0 bottom-0 overflow-hidden -z-10 transition-all duration-300 `}
      />
      {videoId ? (
        <iframe
          id="ytplayer"
          type="text/html"
          class="w-full aspect-video"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${
            handler ? 1 : 0
          }&loop=1&controls=${
            handler ? 0 : 1
          }&modestbranding=1&showinfo=0&rel=0`}
          frameborder="0"
        ></iframe>
      ) : (
        <video
          playsInline
          preload="none"
          muted
          autoPlay
          loop
          controls={!handler}
          className={`aspect-auto object-cover transition-all duration-300 z-10 ${
            preLoad ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          ref={videoRef}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      {handler && (
        <button
          className={`z-20 w-36 h-36 sm:w-[200px] sm:h-[200px] rounded-full bg-purple bg-opacity-20 flex justify-center items-center group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            preLoad ? "opacity-100" : "opacity-0"
          }`}
          onClick={videoHandler}
        >
          <div className="w-20 h-20 sm:w-[120px] sm:h-[120px] rounded-full bg-purple flex justify-center items-center pl-2 sm:pl-3 transition-all duration-300 group-hover:bg-[#811BFF] group-focus:bg-[#9C4BFF]">
            <svg
              width="36"
              height="46"
              viewBox="0 0 36 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 sm:w-9 sm:h-[46px]"
            >
              <path d="M35.5 23L0.5 45.5V0.5L35.5 23Z" fill="white" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};

export default Video;
