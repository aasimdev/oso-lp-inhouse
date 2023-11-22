import Image from "next/image";
import React from "react";

const Avatar = ({ avtarImage, text }) => {
  return (
    <>
      <div className="w-auto h-14 px-4 py-2 rounded-full shadow border-2 border-purple-400 justify-center items-center gap-2 inline-flex">
        <div className="w-10 h-10 relative">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-purple-400">
            <Image
              src={avtarImage}
              alt="Avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="text-center text-gray-900 text-base font-normal leading-normal">
          {text}
        </div>
      </div>
    </>
  );
};

export default Avatar;
