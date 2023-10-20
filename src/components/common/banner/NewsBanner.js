import React from "react";
import CheckListItem from "./CheckListItem";
import Video from "@/components/Video";
import NewsLetter from "@/components/news-letter";

const NewsBanner = ({ title, description, videoId }) => {
  return (
    <section className="bg-gradient-to-b from-purple-400">
      <div className="px-6 mx-auto max-w-6xl">
        <div className=" flex flex-col lg:flex-row items-center pt-4  md:py-16 xl:gap-[117px] lg:gap-16 gap-0">
          <div className="lg:w-[440px] md:w-[80%] w-full">
            <div className="flex flex-col md:gap-6 gap-2 ">
              <h1
                className="md:text-[48px] text-[40px] text-left font-extrabold leading-[56px] md:leading-[60px] text-black max-w-4xl mx-auto"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h1>
              <p className="text-gray-800 text-left md:text-[24px] text-2xl font-light leading-tight">
                {description}
              </p>
            </div>
            <div className="py-6 hidden lg:flex justify-start gap-2 md:flex-nowrap flex-wrap">
              <CheckListItem title="Interactive" />
              <CheckListItem title="Up-to-date" />
              <CheckListItem title="No credit card required" />
            </div>
            <div className=" py-4 md:py-8 lg:py-0 ">
              <NewsLetter
                arrowIcon
                label="Join Waitlist"
                formId={"BannerFormId"}
                variant="newsBanner"
                className="!w-full"
              />
            </div>
          </div>
          <div className=" lg:hidden flex justify-start gap-2 flex-wrap py-4 ">
            <CheckListItem title="Fully Uncensored" />
            <CheckListItem title="7-day trial" />
            <CheckListItem title="Customised Plug-ins" />
          </div>
          <div className="lg:w-[50%] md:w-[80%] w-full lg:h-[586px] pt-2 md:pt-6 lg:pt-0">
            <Video videoId={videoId} variant="newsBanner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsBanner;
