import React from "react";
import UseCaseCard from "../usecaseCard/index";
import PIC1 from "../../../public/assets/newpage/Image1.png";
import AVTAR from "../../../public/assets/newpage/avtar.svg";

const TopThreeUsecase = () => {
  const handleClick = () => {};

  return (
    <section className="py-6 md:pt-16 mx-auto max-w-6xl">
      <div className="flex flex-col md:gap-4 gap-2">
        <h1 className="px-6 text-[40px] md:text-5xl md:text-center font-bold md:font-extrabold leading-[56px] md:leading-[64px] text-black max-w-4xl mx-auto">
          Top 3 most used cases
        </h1>
        <div className="max-w-6xl flex flex-col py-6 md:py-12">
          <div className="mx-6 max-w-6xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <UseCaseCard
              bgImage={PIC1}
              avatar={AVTAR}
              name={"Laura Aden"}
              trip={"Plan a Trip"}
            />
            <UseCaseCard
              bgImage={PIC1}
              avatar={AVTAR}
              name={"Laura Aden"}
              trip={"Plan a Trip"}
            />

            <UseCaseCard
              bgImage={PIC1}
              avatar={AVTAR}
              name={"Laura Aden"}
              trip={"Plan a Trip"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pb-6 md:pt-8 w-full">
        <button
          className="tryOSOButton bg-purple text-white text-2xl font-normal rounded-lg"
          onClick={handleClick}
        >
          Try Using OSO
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TopThreeUsecase;
