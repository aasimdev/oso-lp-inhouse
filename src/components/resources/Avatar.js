import Image from "next/image";
import React from "react";

const Avatar = ({ avtarImage, text }) => {
  return (
    <>
      <div className="w-auto h-14 px-4 py-2 rounded-full shadow border-2 border-purple-400 justify-center items-center gap-2 inline-flex">
        <div className="w-10 h-10 relative">
          <div className="w-10 h-10 left-0 top-0 absolute bg-purple-200 rounded-full" />
          <Image
            className="w-[38.75px] h-[38.44px] left-[0.62px] top-[1.88px] absolute"
            src={avtarImage}
            alt=""
          />
        </div>
        <div className="text-center text-gray-900 text-base font-normal leading-normal">
          {text}
        </div>
      </div>
    </>
  );
};

export default Avatar;
