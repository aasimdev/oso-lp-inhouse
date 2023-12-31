import { useState } from "react";
import PlaceholderLoading from "react-placeholder-loading";

const TikTokEmbed = ({ videoId }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleHover = () => {
    // console.log("------hover--");
    setIsPlay(true);
    setTimeout(() => {
      setIsPlay(false);
    }, 45000);
  };

  const onLoadVideo = () => {
    setIsLoading(false);
  };

  // console.log("------hover--value", isPlay);

  return (
    <div
      className="overflow-hidden md:mt-6 left-0 w-full h-[580px] relative"
      onMouseEnter={handleHover}
    >
      {isLoading && (
        <PlaceholderLoading shape="rect" width={336} height={580} />
      )}
      <iframe
        className={`border border-gray-50 left-0 w-full h-full absolute ${
          isLoading ? "hidden" : ""
        }`}
        src={`https://www.youtube.com/embed/${videoId}?lang=en&autoplay=${
          isPlay ? 1 : 0
        }&mute=${isPlay ? 1 : 0}&loop=1`}
        width="100%"
        // height="700"
        allowFullScreen
        loading="eager"
        style={{ overflow: "hidden", border: "1px", borderRadius: "16px" }}
        muted
        onLoad={onLoadVideo}
      ></iframe>
    </div>
  );
};

export default TikTokEmbed;
