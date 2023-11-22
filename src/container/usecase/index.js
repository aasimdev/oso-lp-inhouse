"use client";

import React, { useState, useEffect } from "react";
import Category from "@/components/usecase/Category";
import Link from "next/link";
import AllUsecases from "@/components/usecase/AllUsecases";
import { filterUsecaseButton, usecaseData } from "@/constant/usecase";

const UseCase = () => {
  const [active, setActive] = useState("All");
  const [videoData, setVideoData] = useState(usecaseData.slice(0, 12));
  const [isMobile, setIsMobile] = useState(false);

  const handleFilter = (value) => {
    setActive(value);
    const newVideos = usecaseData.filter((v) => v.type === value);
    setVideoData(newVideos);
  };

  const handleClick = () => {};

  useEffect(() => {
    const checkIsMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768); // Adjust the threshold based on your design
    };

    // Initial check
    checkIsMobile();

    // Listen for window resize events
    window.addEventListener("resize", checkIsMobile);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
      <section className="mx-auto max-w-6xl">
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
      <section className="sm:py-8 px-6 mx-auto max-w-6xl overflow-hidden">
        <div className="pl-2 pr-6 flex flex-col md:gap-4 gap-2  md:items-center">
          <h1 className="md:text-[64px] text-[40px] md:text-center font-extrabold leading-[56px] md:leading-[80px] text-black w-full md:mx-auto">
            OSO Use Cases
          </h1>
          <p className="text-gray-800 md:text-center text-left md:text-[32px] text-2xl font-light leading-tight">
            Explore the common and easy ways to use OSO.
          </p>
        </div>
        {isMobile ? (
          <div className="w-screen flex gap-2 justify-start overflow-x-auto pl-2 pr-6  py-6">
            {filterUsecaseButton.map((v, i) => {
              return (
                <div key={i}>
                  <Category
                    category={v}
                    active={active}
                    handleFilter={handleFilter}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="pl-2 pr-6 flex gap-2 flex-wrap md:justify-center md:px-24 py-6 md:pt-10">
            {filterUsecaseButton.map((v, i) => {
              return (
                <div key={i}>
                  <Category
                    category={v}
                    active={active}
                    handleFilter={handleFilter}
                  />
                </div>
              );
            })}
          </div>
        )}
      </section>

      <AllUsecases videoData={videoData} />

      <section className="sm:mt-8 py-6 sm:py-8 px-6 mx-auto max-w-6xl">
        <div className="pl-2 pr-6 flex flex-col md:gap-4 gap-2 w-full">
          <h1 className="text-[40px] md:text-5xl md:text-center font-bold leading-[56px] md:leading-[64px] text-black mx-auto">
            More than 100 thousand people across the world choose OSO
          </h1>
        </div>
        <div className="flex justify-center items-center py-6 md:py-8 mt-4">
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
    </>
  );
};

export default UseCase;
