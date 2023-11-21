import React from "react";
import PIC1 from "../../../public/assets/newpage/Image1.png";
import usecaseImage from "../../../public/assets/usecase/usecase1.png";
import AVTAR from "../../../public/assets/newpage/avtar.svg";
import UseCaseCard from "../usecaseCard/index";
import Link from "next/link";

const ExploreUsecases = () => {
  const image = PIC1;

  return (
    <section className=" py-6 sm:py-8 mx-auto max-w-6xl">
      <div className="flex flex-col md:gap-4 gap-2">
        <div className="mx-auto max-w-6xl flex flex-col gap-2 lg:gap-4">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
            <UseCaseCard
              bgImage={image}
              avatar={AVTAR}
              name={"Laura Aden"}
              trip={"Plan a Trip"}
            />
            <UseCaseCard
              bgImage={image}
              avatar={AVTAR}
              name={"Laura Aden"}
              trip={"Plan a Trip"}
            />

            <UseCaseCard
              bgImage={image}
              avatar={AVTAR}
              name={"Laura Aden"}
              trip={"Plan a Trip"}
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
            <UseCaseCard
              bgImage={image}
              avatar={AVTAR}
              name={"Laura Aden"}
              trip={"Plan a Trip"}
            />
            <UseCaseCard
              bgImage={image}
              avatar={AVTAR}
              name={"Laura Aden"}
              trip={"Plan a Trip"}
            />

            <UseCaseCard
              bgImage={image}
              avatar={AVTAR}
              name={"Laura Aden"}
              trip={"Plan a Trip"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-6 md:py-8 gap-4 mt-4">
        <Link
          className=" bg-transparent text-purple border border-purple text-2xl font-normal w-[345px] md:w-[431px] h-[74px] rounded-lg justify-center items-center flex gap-2"
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
