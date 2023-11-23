import React from "react";
import PIC1 from "../../../public/assets/newpage/Image1.png";
import usecaseImage from "../../../public/assets/usecase/usecase1.png";
import AVTAR from "../../../public/assets/newpage/avtar.svg";
import UseCaseCard from "../usecaseCard/index";
import Link from "next/link";
import TikTokEmbed from "../usecase/TikTokEmbed";
import { tiktokVideosData } from "@/constant/usecase";

const ExploreUsecases = () => {
  const image = PIC1;

  const videoData = tiktokVideosData.slice(-6);

  return (
    <section className="mx-auto max-w-6xl pt-6 md:pt-10">
      <div className="flex flex-col md:gap-4 gap-2">
        <div className="flex flex-col gap-2 lg:gap-4">
          <div className="mx-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoData.map((v, i) => {
              return (
                <TikTokEmbed
                  key={i}
                  videoId={v.videoId}
                  category={v.category}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-6 md:py-8 gap-4 mt-4 md:mt-8">
        <Link
          className=" bg-transparent text-purple border border-purple text-2xl font-normal px-4 md:px-16  h-[74px] rounded-lg justify-center items-center flex gap-2"
          href="/usecase"
        >
          explore all the use cases
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="arrow_forward">
              <path
                id="Vector"
                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                fill="#8E33FF"
              />
            </g>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default ExploreUsecases;
