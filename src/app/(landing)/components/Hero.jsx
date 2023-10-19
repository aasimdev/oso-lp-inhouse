"use client";
import Video from "@/components/Video";
import CheckListItem from "@/components/common/banner/CheckListItem";
import Banner from "@/components/common/banner/Index";
import NewsLetter from "@/components/news-letter";
import React from "react";

const Hero = () => {
  return (
    <section className="">
      <div className="pt-8 pb-0  md:py-24">
        <div className="flex flex-col md:gap-6 gap-2  md:mb-6">
          <h1 className="md:text-[64px] text-[40px] md:text-center text-left font-extrabold leading-[56px] md:leading-[80px] text-black mx-auto">
            A better way to use the internet.
          </h1>
          <p className="text-gray-800 md:text-center text-left md:text-[32px] text-2xl font-light leading-10">
            OSO extends the power of AI to the applications
            <br /> you rely on in your daily life.
          </p>
        </div>

        <div className="md:flex justify-center items-center pt-8 md:pt-6">
          <NewsLetter arrowIcon label="Join Waitlist" />
        </div>

        <div className="mt-6 md:mt-8 flex md:justify-center justify-start gap-6 sm:gap-8 md:flex-nowrap flex-wrap">
          <CheckListItem title="Uncensored" />
          <CheckListItem title="Up-to-date" />
          <CheckListItem title="No credit card required" />
        </div>

        <Video videoId="v1Z1rmm4SqU" />
      </div>
    </section>
  );
};

export default Hero;
