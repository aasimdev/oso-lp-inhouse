import React from "react";
import UseCaseCard from "../usecaseCard/index";
import PIC1 from "../../../public/assets/newpage/Image1.png";
import AVTAR from "../../../public/assets/newpage/avtar.svg";
import OSOWorkCard from "./OSOWorkCard";

const OSOWork = () => {
  const handleClick = () => {};

  return (
    <section className="sm:mt-8 py-4 mx-auto max-w-6xl">
      <div className="flex flex-col md:gap-4 gap-2">
        <h1 className="text-5xl md:text-center text-left font-extrabold text-black max-w-4xl mx-auto">
          How OSO Works?
        </h1>
        <div className="mx-auto max-w-6xl flex flex-col py-6">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
            <OSOWorkCard bgColor={"bg-[#61F3F3]"} title={"Search"} />
            <OSOWorkCard bgColor={"bg-[#77ED8B]"} title={"Chat"} />
            <OSOWorkCard bgColor={"bg-[#FFD666]"} title={"News"} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-8 w-full">
        <button
          className="bg-purple text-white text-2xl font-normal px-14 h-[74px] rounded-lg justify-center items-center flex gap-2"
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

export default OSOWork;
