import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Video = ({ src, videoId, variant, poster }) => {
  const [handler, setHandler] = useState(true);
  const videoRef = useRef(null);
  const [preLoad, setPreLoad] = useState(false);
  const iframeRef = useRef(null);

  const videoHandler = () => {
    setHandler(false);
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = false;
      video.play();
    }
    if (variant === "newsBanner") {
      handleFullScreen();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setPreLoad(true);
    }, 300);
  }, []);

  const handleFullScreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }

      // Add an event listener to listen for the fullscreen change event
      if (variant === "newsBanner") {
        document.addEventListener("fullscreenchange", exitFullScreenHandler);
        document.addEventListener(
          "webkitfullscreenchange",
          exitFullScreenHandler
        );
        document.addEventListener("mozfullscreenchange", exitFullScreenHandler);
        document.addEventListener("MSFullscreenChange", exitFullScreenHandler);
        setHandler(false);
      }
    }
  };

  const exitFullScreenHandler = () => {
    const iframe = iframeRef.current;
    if (
      !document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.mozFullScreenElement &&
      !document.msFullscreenElement
    ) {
      // Exit fullscreen
      if (iframe.exitFullscreen) {
        iframe.exitFullscreen();
      } else if (iframe.mozCancelFullScreen) {
        iframe.mozCancelFullScreen();
      } else if (iframe.webkitExitFullscreen) {
        iframe.webkitExitFullscreen();
      } else if (iframe.msExitFullscreen) {
        iframe.msExitFullscreen();
      }

      if (variant === "newsBanner") {
        document.removeEventListener("fullscreenchange", exitFullScreenHandler);
        document.removeEventListener(
          "webkitfullscreenchange",
          exitFullScreenHandler
        );
        document.removeEventListener(
          "mozfullscreenchange",
          exitFullScreenHandler
        );
        document.removeEventListener(
          "MSFullscreenChange",
          exitFullScreenHandler
        );
      }
      setHandler(true);
    }
  };

  return (
    <div
      className={`${variant !== "newsBanner" ? "mt-8 md:mt-6" : "h-full flex"
        } mx-auto max-w-[902px] overflow-hidden text-center h-auto sm:h-[507px] relative ${variant === "osowork"
          ? " rounded-t-2xl h-[296px]"
          : " rounded-2xl h-video"
        }`}
    >
      <div
        className={`w-full  ${variant === "newsBanner" ? "h-full" : "h-[507px]"
          } absolute left-0 top-0 right-0 bottom-0 overflow-hidden -z-10 transition-all duration-300 ${variant === "osowork" ? " rounded-t-2xl h-[296px]" : " rounded-2xl"
          }`}
      />
      {videoId ? (
        <iframe
          id="ytplayer"
          type="text/html"
          class="w-full aspect-video -m-[1px] inset-0-clip h-full"
          src={`https://www.youtube.com/embed/${videoId}?${variant !== "newsBanner" ? 1 : handler ? 0 : 1
            }&mute=${handler ? 1 : 0}&loop=1&controls=${handler ? 0 : 1
            }&modestbranding=1&showinfo=0&rel=0`}
          frameborder="0"
          allowFullScreen
          allow="fullscreen"
          controls
          ref={iframeRef}
        ></iframe>
      ) : (
        <>
          <video
            playsInline
            muted
            loop
            autoPlay
            controls={!handler}
            preload="none"
            className={`aspect-auto object-cover transition-all duration-300 z-10 ${preLoad ? "opacity-100" : "opacity-0"
              }`}
            loading="lazy"
            ref={videoRef}
          >
            <source src={`/assets/video/${src}`} type="video/mp4" />
          </video>
          {handler &&
            <Image src={`/assets/video/${poster}`} width="902" height="507" className="absolute left-0 top-0 right-0 bottom-0 w-full h-full" alt="Banner Thumbnail"/>
          }

        </>

      )}
      {handler && (
        <button
          className={`z-20 w-36 h-36 sm:w-[200px] sm:h-[200px] rounded-full bg-purple bg-opacity-20 flex justify-center items-center group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${preLoad ? "opacity-100" : "opacity-0"
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
