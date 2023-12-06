import { useState, useEffect, useRef } from "react";
import PlaceholderLoading from "react-placeholder-loading";

const ShortVideo = ({ videoId, isSlideChange, setIsSlideChange }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(349);
  const iframeRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 425) {
        if (window.innerWidth == 425) {
          setCurrentWidth(425 - 48);
        }
        if (window.innerWidth <= 375) {
          setCurrentWidth(window.innerWidth - 48);
        }
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHover = () => {
    setIsPlay(true);
    setTimeout(() => {
      setIsPlay(false);
    }, 45000);
  };

  const onLoadVideo = () => {
    setIsLoading(false);
  };

  const onMove = () => {
    console.log("on move------------");
    setIsSlideChange(false);
  };

  const emptyClick = () => {
    console.log("-----empty click");
    setIsSlideChange(true);
  };

  console.log("----------isSlideChange-", isSlideChange);

  return (
    <div
      className="overflow-hidden left-0 w-full h-[508px] relative"
      onMouseEnter={handleHover}
    >
      {isLoading && (
        <PlaceholderLoading shape="rect" width={currentWidth} height={508} />
      )}
      {!isSlideChange && !isLoading && (
        <div
          className="absolute left-0 w-full h-full z-10 transition-all duration-300"
          onClick={() => emptyClick()}
        />
      )}
      <iframe
        ref={iframeRef}
        id="videoIframe"
        className={`border border-gray-50 left-0 w-full h-full absolute rounded-t-2xl ${
          isLoading ? "hidden" : ""
        }`}
        src={`https://www.youtube.com/embed/${videoId}?lang=en&autoplay=${
          isPlay ? 1 : 0
        }&mute=${isPlay ? 1 : 0}&loop=1&enablejsapi=1`}
        width="100%"
        allowFullScreen
        loading="eager"
        style={{ overflow: "hidden" }}
        muted
        onLoad={onLoadVideo}
        onMouseMove={() => onMove()}
        onTouchMove={() => onMove()}
        // onDragEnd={() => console.log("-------------------drags")}
      ></iframe>
    </div>
  );
};

export default ShortVideo;
