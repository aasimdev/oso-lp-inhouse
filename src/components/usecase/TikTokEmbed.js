import { useState } from "react";

const TikTokEmbed = ({ videoId }) => {
  const [isPlay, setIsPlay] = useState(false);

  const handleHover = () => {
    setIsPlay(true);
    setTimeout(() => {
      setIsPlay(false);
    }, 1000);
  };

  return (
    <div
      className="overflow-hidden md:mt-6"
      onMouseEnter={handleHover}
      // onMouseLeave={handleMouseLeave}
    >
      <iframe
        className="border border-gray-50"
        src={`https://www.tiktok.com/embed/v2/${videoId}?lang=en&autoplay=${isPlay.toString()}`}
        width="100%"
        height="750"
        allowFullScreen
        loading="eager"
        style={{ overflow: "hidden", border: "1px", borderRadius: "30px" }}
        muted
      ></iframe>
    </div>
  );
};

export default TikTokEmbed;
