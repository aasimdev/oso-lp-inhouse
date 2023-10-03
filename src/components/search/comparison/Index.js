"use client";
import React from "react";
import InnerSection from "./InnerSection";
import NewsLetter from "@/components/news-letter";
const Comparison = () => {
  return (
    <section>
      <div className="px-6 mx-auto max-w-6xl">
        <div className="py-16 md:text-center text-start">
          <h3 className="md:text-5xl text-[40px] leading-tight font-bold text-black md:leading-[80px]">
            How people are using OSO Search
          </h3>
        </div>
        <InnerSection />
        <div className="md:flex justify-center items-center pb-6 sm:pb-0 pt-20 sm:pt-16">
          <NewsLetter label="Join Waitlist" arrowIcon={true} />
        </div>
      </div>
    </section>
  );
};

export default Comparison;
