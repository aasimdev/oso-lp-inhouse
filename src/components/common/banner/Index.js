import React from "react";
import CheckListItem from "./CheckListItem";
import Button from "../Button";
import Video from "@/components/Video";
import NewsLetter from "@/components/news-letter";

const Banner = ({ title, description, videoId, src, checklist, poster }) => {
  return (
    <section className="bg-gradient-to-b from-purple-400 pb-10 md:pb-14">
      <div className="px-6 mx-auto max-w-6xl">
        <div className="pt-8 md:pt-24">
          <div className="flex flex-col md:gap-6 gap-2  md:mb-6">
            <h1
              className="md:text-[56px] text-[40px] md:text-center text-left font-extrabold leading-[56px] md:leading-[80px] text-black max-w-4xl mx-auto"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
            <p className="text-gray-800 md:text-center text-left md:text-[32px] text-2xl font-light leading-tight">
              {description}
            </p>
          </div>

          <div className="md:flex justify-center items-center pt-8 md:pt-6 flex-col">
            {/* <NewsLetter
              arrowIcon
              label="Join Waitlist"
              formId={"BannerFormId"}
            /> */}
            <Button label="Try OSO" arrowIcon={true} link="https://l.oso.ai/prod" target="_blank"/>
          </div>

          <div className="mt-6 md:mt-8 flex md:justify-center justify-start gap-6 sm:gap-8 md:flex-nowrap flex-wrap">
            {checklist && checklist.map((item, index) => (
              <CheckListItem title={item} key={index}/>
            ))}
          </div>
          <Video videoId={videoId || undefined} src={src || undefined} poster={poster}/>
        </div>
      </div>
    </section>
  );
};

export default Banner;
