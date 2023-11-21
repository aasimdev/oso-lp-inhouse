"use client";

import React from "react";
import ExploreUsecases from "@/components/resources/ExploreUsecases";
import Category from "@/components/usecase/Category";
import Link from "next/link";
import AllUsecases from "@/components/usecase/AllUsecases";

// import PIC2 from "../../../public/assets/newpage/Image2.png";
// import PIC3 from "../../../public/assets/newpage/Image3.png";
// import PIC4 from "../../../public/assets/newpage/Image4.png";
// import PIC5 from "../../../public/assets/newpage/Image5.png";
// import PIC6 from "../../../public/assets/newpage/Image6.png";
// import CARD1 from "../../../public/assets/card-image/Image1.png"

const UseCase = () => {
  const handleClick = () => {};
  return (
    <>
      <section className=" mx-auto max-w-6xl">
        <div className="w-[1281px] h-[88px] px-24 py-8 justify-start items-start gap-2 inline-flex">
          <div className="w-6 h-6 relative" />
          <Link
            href={"/resource"}
            className="text-black text-base font-normal inline-flex gap-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="arrow_back">
                <path
                  id="Vector"
                  d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                  fill="black"
                />
              </g>
            </svg>
            Use Cases
          </Link>
        </div>
      </section>
      <section className=" sm:py-8 px-6 mx-auto max-w-6xl">
        <div className="flex flex-col md:gap-4 gap-2  md:items-center">
          <h1 className="md:text-[56px] text-[40px] md:text-center text-left font-extrabold leading-[56px] md:leading-[80px] text-black max-w-4xl md:mx-auto">
            OSO Use Cases
          </h1>
          <p className="text-gray-800 md:text-center text-left md:text-[32px] text-2xl font-light leading-tight">
            Explore the common and easy ways to use OSO.
          </p>
        </div>
        <div className="flex gap-2   flex-wrap md:justify-center md:px-24 py-6">
          <div>
            {" "}
            <Category text="All" />
          </div>
          <div>
            {" "}
            <Category text="Food Recipies" />
          </div>
          <div>
            {" "}
            <Category text="Advance Search" />
          </div>
          <div>
            {" "}
            <Category text="Plan a Trip" />
          </div>
          <div>
            {" "}
            <Category text="Studnts" />
          </div>
          <div>
            {" "}
            <Category text="Research" />
          </div>
          <div>
            {" "}
            <Category text="Research" />
          </div>
          <div>
            {" "}
            <Category text="Art" />
          </div>
          <div>
            {" "}
            <Category text="Technology" />
          </div>
          <div>
            {" "}
            <Category text="Design" />
          </div>
          <div>
            {" "}
            <Category text="Music" />
          </div>
          <div>
            {" "}
            <Category text="Music" />
          </div>
          <div>
            {" "}
            <Category text="Music" />
          </div>
        </div>
      </section>

      <AllUsecases />

      <section className="sm:mt-8 py-6 sm:py-8 px-6 mx-auto max-w-6xl">
        <div className="flex flex-col md:gap-4 gap-2">
          <h1 className="md:text-[56px] text-[40px] md:text-center text-left font-extrabold leading-[56px] md:leading-[80px] text-black max-w-4xl mx-auto">
            More than 100 thousand people across the world choose OSO
          </h1>
        </div>
        <div className="flex justify-center items-center py-6 md:py-8 mt-4">
          <button
            className="bg-purple text-white text-2xl font-normal px-8 h-[74px] rounded-lg justify-center items-center flex gap-2"
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
    </>
  );
};

export default UseCase;
