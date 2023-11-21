import React from "react";
import Image from "next/image";
import TikTokEmbed from "../usecase/TikTokEmbed";

const UseCaseCard = ({ bgImage, avatar, name, trip }) => {
  return (
    <div className="max-w-[347px] w-auto mx-2 lg:mx-1 xl:mx-2 rounded-2xl border border-gray-50 mt-6 md:mt-16">
      <div className="w-[226px] absolute justify-start items-center gap-2.5 inline-flex pt-4 pl-4">
        <Image className="w-8 h-8 rounded-full" src={avatar} alt="Avtar" />
        <div className="text-center text-white text-sm font-normal leading-snug">
          {name}
        </div>
      </div>
      <div className="max-w-[347px]">
        {/* <Image
          src={bgImage}
          alt="Image"
          className="rounded-t-2xl"
        /> */}
        <TikTokEmbed videoId="7303588919692627242" />
      </div>
      <div className="w-[347px] p-6 justify-start items-center gap-2 inline-flex">
        <div className="grow shrink basis-0 text-black text-base font-semibold leading-normal">
          {trip}
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard;
