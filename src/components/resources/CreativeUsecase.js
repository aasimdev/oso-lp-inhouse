import React from "react";
import UseCaseCard from "../usecaseCard/index";
import PIC1 from "../../../public/assets/newpage/Image1.png";
import AVTAR from "../../../public/assets/newpage/avtar.svg";
import TikTokEmbed from "../usecase/TikTokEmbed";
import { tiktokVideosData } from "@/constant/usecase";

const CreativeUsecase = () => {
  const handleClick = () => {};

  const videoData = tiktokVideosData.filter((v) =>
    v.type.includes("creative-oso")
  );

  return (
    <section className="py-6 px-6 md:pt-16 mx-auto max-w-6xl">
      <div className="px-6 flex flex-col md:gap-4 gap-2 justify-center items-center">
        <h1 className="text-[40px] md:text-5xl md:text-center font-bold md:font-extrabold leading-[56px] md:leading-[64px] text-black">
          Creative ways to use OSO
        </h1>
      </div>
      <div className="flex flex-col py-8 md:py-12">
        <div className="mx-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoData.map((v, i) => {
            return (
              <TikTokEmbed key={i} videoId={v.videoId} category={v.category} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CreativeUsecase;
