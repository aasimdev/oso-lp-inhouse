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
  const container = useRef();
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" });
  const [isMobile, setIsMobile] = useState(false);

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


  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray('.phoneWrap');
      const rightElements = gsap.utils.toArray('.contentWrap');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: '+=0',
          end: '+=300%',
          pin: true,
          scrub: true,
          markers: false,
          // pinSpacing: 3
        },
      });

      images.forEach((img, i) => {
        if (images[i + 1]) {
          tl.to(img,
            {
              opacity: 0,
            }, '+=0.5')
            .to(images[i + 1], {
              opacity: 1
            }, '<')
            .to(
              rightElements,
              {
                // yPercent: -(100 * (i + 1)),
                ease: 'none'
              },
              '<'
            );
        }
      });
      tl.to({}, {}, '+=0.5');
    }, container);
    return () => ctx.revert();
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
      className="px-6 mx-auto max-w-6xl"
    >
      <div className="py-16 md:text-center text-start">
        <h3 className="md:text-5xl text-[40px] leading-tight font-bold text-black md:leading-[80px]">
          How people are using OSO Search
        </h3>
      </div>
      <div className="md:pt-24  flex flex-col" >
        <div className="md:flex md:flex-nowrap flex-wrap justify-between">
          <div className="contentWrap w-full md:w-[346px] md:mt-[52px] flex flex-col gap-12 md:gap-9 flex-grow-0 flex-shrink-0 basis-auto mb-12 sm:mb-0">

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
            <div className=" relative overflow-hidden w-full flex ">
              <div className="w-full h-full relative overflow-hidden">
                <div
                  className="phoneWrap flex flex-nowrap w-[200%] md:w-full gap-8 md:justify-end md:gap-4 md:mt-0 mt-16 opacity-100 absolute left-0 top-0 right-0 bottom-0"
                >
                  <Phone title="OSO" obj={"/assets/video/stay-update-oso.mp4"} />
                  <Phone title="ChatGPT" obj={"/assets/video/stay-update-gpt.mp4"} />
                </div>
                <div
                  className="phoneWrap flex flex-nowrap w-[200%] md:w-full gap-8 md:justify-end md:gap-4 md:mt-0 mt-16 opacity-0 absolute left-0 top-0 right-0 bottom-0"
                >
                  <Phone title="OSO" obj={"/assets/video/plan-your-event-oso.mp4"} />
                  <Phone title="ChatGPT" obj={"/assets/video/plan-your-event-gpt.mp4"} />
                </div>
                <div
                  className="phoneWrap flex flex-nowrap w-[200%] md:w-full gap-8 md:justify-end md:gap-4 md:mt-0 mt-16 opacity-0 absolute left-0 top-0 right-0 bottom-0"
                >
                  <Phone title="OSO" obj={"/assets/video/under-deep-review-oso.mp4"} />
                  <Phone title="ChatGPT" obj={"/assets/video/under-deep-review-gpt.mp4"} />
                </div>
              </div>
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
