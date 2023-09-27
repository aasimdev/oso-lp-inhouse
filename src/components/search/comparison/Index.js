import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import NewsLetter from "@/components/news-letter";
import Phone from "./Phone";
import ComparisonContent from "./Content";


const Comparison = () => {
  const comparison = useRef();
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" });
  const [isMobile, setIsMobile] = useState(false); // Default to false initially

  gsap.registerPlugin(ScrollTrigger);


  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 720);
  };


  useEffect(() => {
    if (typeof window !== "undefined") {
      updateIsMobile();
      window.addEventListener("resize", updateIsMobile);
      return () => {
        window.removeEventListener("resize", updateIsMobile);
      };
    }
  }, []);


  const settings = {
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    indicators: true,
    autoplay: false
  }


  return (
    <section
      className="px-6 mx-auto max-w-6xl overflow-hidden"
      ref={comparison}
    >
      <div className="py-16 md:text-center text-start">
        <h3 className="md:text-5xl text-[40px] leading-tight font-bold text-black md:leading-[80px]">
          How people are using OSO Search
        </h3>
      </div>
      <div className="md:pt-24  flex flex-col ">
        <div className="md:flex md:flex-nowrap flex-wrap justify-between">
          <div className="w-full md:w-[346px] md:mt-[52px] flex flex-col gap-12 md:gap-9 flex-grow-0 flex-shrink-0 basis-auto mb-12 sm:mb-0">

            {/* Stay Updated */}
            <ComparisonContent
              title=" Stay Updated"
              description="  Get instant news updates like the recent Maui Fires. Watch OSO
              gather real-time information from diverse sources."
              isMobile={isMobile}
            />

            {/* Stay Updated Mobile */}
            {!isDesktop && (
              <div className="-mx-6 sm:mx-0">
                <Slide  {...settings} >
                  <Phone title="OSO" obj={"/assets/video/stay-update-oso.mp4"} />
                  <Phone title="ChatGPT" obj={"/assets/video/stay-update-gpt.mp4"} />
                </Slide>
              </div>
            )}


            {/* Plan your event */}
            <ComparisonContent
              title="Plan Your Events"
              description="Wondering about the Grand Prix in Las Vegas? From dates to ticket pricing and seat recommendations, see OSO fetch it all."
              isMobile={isMobile}
            />


            {/* Plan your event mobile*/}
            {!isDesktop && (
              <div className="-mx-6 sm:mx-0">
                <Slide  {...settings} >
                  <Phone title="OSO" obj={"/assets/video/plan-your-event-oso.mp4"} />
                  <Phone title="ChatGPT" obj={"/assets/video/plan-your-event-gpt.mp4"} />
                </Slide>
              </div>
            )}


            {!isMobile && (
              <ComparisonContent
                title="Deep Dive Reviews"
                description="Looking for the best restaurant experience? Observe how OSO
               evaluates atmosphere, culinary highlights, and more"
                isMobile={isMobile}
              />
            )}
          </div>


          {/* Desktop phones */}
          {!isMobile && (
            <div
              className="flex flex-nowrap w-[200%] md:w-full gap-8 md:justify-end md:gap-4 md:mt-0 mt-16"
            >
              <Phone title="OSO" obj={"/assets/video/stay-update-oso.mp4"} />
              <Phone title="ChatGPT" obj={"/assets/video/stay-update-gpt.mp4"} />
            </div>
          )}



          {/* Mobile Views */}
          {!isDesktop && <>

            <ComparisonContent
              title="Deep Dive Reviews"
              description="Looking for the best restaurant experience? Observe how OSO
          evaluates atmosphere, culinary highlights, and more"
              isMobile={isMobile}
            />
            <div className="-mx-6 sm:mx-0 mt-12 sm:mt-0">
              <Slide  {...settings}>
                <Phone title="OSO" obj={"/assets/video/under-deep-review-oso.mp4"} />
                <Phone title="ChatGPT" obj={"/assets/video/under-deep-review-gpt.mp4"} />
              </Slide>
            </div>
          </>}
        </div>

        <div className="md:flex justify-center items-center pb-6 sm:pb-0 pt-20 sm:pt-[100px]">
          <NewsLetter label="Join Waitlist" arrowIcon={true} />
        </div>

      </div>
    </section>
  );
};

export default Comparison;
