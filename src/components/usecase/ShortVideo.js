import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const ShortVideo = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="overflow-hidden left-0 w-full h-[581px] sm:h-[636px] relative iframe-container-div">
      <video
        ref={videoRef}
        loop
        controls={isPlaying}
        preload="metadata"
        className="w-full h-full rounded-2xl"
      >
        <source src={`/assets/video/${videoId}`} type="video/mp4" />
      </video>
      {!isPlaying && (
        <Image
          src="/assets/images/youtube-shorts-icon.svg"
          width="68"
          height="90"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={handleClick}
          alt="Youtube Shorts Icon"
        />
      )}
    </div>
  );
};

export default ShortVideo;
