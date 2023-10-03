import Image from "next/image";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const Phone = ({ title, obj }) => {
  //   const [isReady, setReady] = useState(false);

  return (
    <div
      className={`flex flex-col gap-6 md:gap-8 relative ${
        title === "OSO" ? "lg:-mr-11" : "lg:-mr-10"
      }`}
    >
      <p className="text-center text-[21px] font-medium text-black">{title}</p>
      <div className="relative lg:max-w-full max-w-[348px] h-full mx-auto">
        {/* <video playsInline preload="none" muted autoPlay loop loading="lazy" className='max-w-full sm:max-w-[348px]'>
                    <source src={obj} type="video/mp4" />
                </video> */}
        {/* {!isReady && (
          <Image
            src={`/assets/images/${
              title == "OSO" ? "oso-loading.jpg" : "gpt-loading.jpg"
            }`}
            alt=""
            width={500}
            height={800}
            className="w-full h-full mx-auto"
          />
        )} */}
        {/* <ReactPlayer
          url={`https://vimeo.com/${obj}`}
          width="100%"
          height="100%"
          loop={true}
          //   className={`${isReady ? "opacity-100 block" : "opacity-0 hidden"}`}
          //   playing={isReady}
          muted={true}
          controls={false}
          //   onReady={() => setReady(true)}
        /> */}

        <Image
          src={`/assets/gif/${obj}.gif`}
          alt=""
          width={500}
          height={800}
          className="lg:h-[95%] w-full h-full"
        />

        <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0" />
      </div>
    </div>
  );
};

export default Phone;
