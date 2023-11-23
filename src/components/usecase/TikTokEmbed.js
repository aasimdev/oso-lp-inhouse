import { useState } from "react";
import PlaceholderLoading from "react-placeholder-loading";

const TikTokEmbed = ({ videoId }) => {
  // const [isPlay, setIsPlay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const handleHover = () => {
  //   setIsPlay(true);
  //   setTimeout(() => {
  //     setIsPlay(false);
  //   }, 1000);
  // };

  const onLoadVideo = () => {
    setIsLoading(false);
  };

  return (
    <div
      className="overflow-hidden md:mt-6 left-0 w-full h-[720px] relative"
      // onMouseEnter={handleHover}
      // onMouseLeave={handleMouseLeave}
    >
      {isLoading && (
        <PlaceholderLoading shape="rect" width={320} height={600} />
      )}
      <iframe
        className={`border border-gray-50 left-0 w-full h-full absolute ${
          isLoading ? "hidden" : ""
        }`}
        src={`https://www.tiktok.com/embed/v2/${videoId}?lang=en&autoplay=false`}
        width="100%"
        // height="700"
        allowFullScreen
        loading="eager"
        style={{ overflow: "hidden", border: "1px", borderRadius: "30px" }}
        muted
        onLoad={onLoadVideo}
      ></iframe>
    </div>
  );
};

export default TikTokEmbed;
