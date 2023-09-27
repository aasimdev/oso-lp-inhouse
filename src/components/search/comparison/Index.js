import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Button from "@/components/common/Button";
import { useMediaQuery } from "react-responsive";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Phone from "./Phone";
import ComparisonContent from "./Content";


const Comparison = () => {
  const revealed = useRef([]);
  const revealedchat = useRef([]);
  const revealedDeepchat = useRef([]);
  const comparison = useRef();
  const mobileRef = useRef(null);
  const imageOSORef = useRef(null);
  const imageChatGPTRef = useRef(null);
  const phoneB = useRef(null);
  const images = [
    "/assets/images/oso-default.png",
    "/assets/images/oso-scroll.png",
    "/assets/images/chatgpt-default.png",
    "/assets/images/chatgpt-scroll.png",
  ];
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" });
  const [currentIndex, setCurrentIndex] = useState(isDesktop ? 0 : 2);
  const [currentChatIndex, setCurrentChatIndex] = useState(isDesktop ? 2 : 3);

  const [isMobile, setIsMobile] = useState(false); // Default to false initially

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 720);
  };

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      // Add event listener when component mounts
      updateIsMobile();
      window.addEventListener("resize", updateIsMobile);

      // Remove event listener when component unmounts
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

  // useEffect(() => {
  //   const revealedElements = revealed.current;
  //   const revealedChatElements = revealedchat.current;
  //   const revealedDeepChatElements = revealedDeepchat.current;

  //   // Text Animation Toggle
  //   const textToggle = (active, target) => {
  //     if (active) {
  //       gsap.to(target, {
  //         color: "black",
  //         duration: 0.4,
  //       });
  //     } else {
  //       gsap.to(target, {
  //         color: "#cccccc",
  //         duration: 0.4,
  //       });
  //     }
  //   };

  //   if (!isMobile) {
  //     ScrollTrigger.create({
  //       trigger: comparison.current,
  //       start: "top-=150px",
  //       end: "15%",
  //       scrub: 1,
  //       toggleActions: "play reverse play reverse",
  //       onToggle: ({ isActive }) => {
  //         textToggle(isActive, revealedElements);
  //       },
  //     });

  //     ScrollTrigger.create({
  //       trigger: comparison.current,
  //       start: "top+=200px",
  //       end: "33%",
  //       scrub: 1,
  //       toggleActions: "play reverse play reverse",
  //       onToggle: ({ isActive }) => {
  //         textToggle(isActive, revealedChatElements);
  //       },
  //     });
  //     ScrollTrigger.create({
  //       trigger: comparison.current,
  //       start: "top+=500px",
  //       end: "bottom-=45%",
  //       scrub: 1,
  //       toggleActions: "play reverse play reverse",
  //       onToggle: ({ isActive }) => {
  //         textToggle(isActive, revealedDeepChatElements);
  //       },
  //     });

  //     gsap.to(imageOSORef.current, {
  //       scrollTrigger: {
  //         trigger: comparison.current,
  //         start: "top-=150px",
  //         end: "15%",
  //         toggleActions: "play reverse play reverse",
  //         onToggle: ({ isActive }) => {
  //           if (isActive) {
  //             setCurrentIndex(1);
  //           } else {
  //             setCurrentIndex(0);
  //           }
  //         },
  //       },
  //     });

  //     gsap.to(imageChatGPTRef.current, {
  //       scrollTrigger: {
  //         trigger: comparison.current,
  //         start: "top+=150px",
  //         end: "bottom-=40%",
  //         toggleActions: "play reverse play reverse",
  //         onToggle: ({ isActive }) => {
  //           if (isActive) {
  //             setCurrentChatIndex(3);
  //           } else {
  //             setCurrentChatIndex(2);
  //           }
  //         },
  //       },
  //     });
  //   } else {
  //     //   const container = mobileRef.current;
  //     //   const containerB = phoneB.current;
  //     //   let phones = gsap.utils.toArray(".panel");
  //     //   let phonesB = gsap.utils.toArray(".panelB");
  //     //   gsap.to(phones, {
  //     //     xPercent: -100 * (phones.length - 1),
  //     //     ease: "none",
  //     //     scrollTrigger: {
  //     //       trigger: container,
  //     //       pin: true,
  //     //       scrub: 1,
  //     //       snap: 1 / (phones.length - 1),
  //     //       start: "top-=11%",
  //     //       end: "bottom",
  //     //       pinSpacing: 2,
  //     //     },
  //     //   });
  //     //   gsap.to(phonesB, {
  //     //     xPercent: -100 * (phonesB.length - 1),
  //     //     ease: "none",
  //     //     scrollTrigger: {
  //     //       trigger: containerB,
  //     //       pin: true,
  //     //       scrub: 1,
  //     //       snap: 1 / (phonesB.length - 1),
  //     //       start: "top-=11%",
  //     //     },
  //     //   });
  //   }

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => {
  //       trigger.kill();
  //     });
  //   };
  // }, [isMobile]);

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
      <div className="md:pt-24  flex flex-col gap-7">
        <div className="md:flex md:flex-nowrap flex-wrap justify-between">
          <div className="w-full md:w-[346px] md:my-[52px] flex flex-col gap-16 md:gap-9 flex-grow-0 flex-shrink-0 basis-auto">

            {/* Stay Updated */}
            <ComparisonContent
              title=" Stay Updated"
              description="  Get instant news updates like the recent Maui Fires. Watch OSO
              gather real-time information from diverse sources."
              isMobile={isMobile}
            />

            {/* Stay Updated Mobile */}
            {!isDesktop && (
              <Slide  {...settings}>
                <Phone title="OSO" obj={"/assets/video/stay-update-oso.mp4"} />
                <Phone title="GPT" obj={"/assets/video/stay-update-gpt.mp4"} />
              </Slide>
            )}


            {/* Plan your event */}
            <ComparisonContent
              title="Plan Your Events"
              description="Wondering about the Grand Prix in Las Vegas? From dates to ticket pricing and seat recommendations, see OSO fetch it all."
              isMobile={isMobile}
            />


            {/* Plan your event mobile*/}
            {!isDesktop && (
              <Slide  {...settings}>
                <Phone title="OSO" obj={"/assets/video/plan-your-event-oso.mp4"} />
                <Phone title="GPT" obj={"/assets/video/plan-your-event-gpt.mp4"} />
              </Slide>
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
              ref={phoneB}
            >
              <Phone title="OSO" obj={"/assets/video/stay-update-oso.mp4"} />
              <Phone title="GPT" obj={"/assets/video/stay-update-gpt.mp4"} />
            </div>
          )}






          {/* Mobile Views */}

          {/* Mobile under deep reviews */}
          {!isDesktop && <>
            <ComparisonContent
              title="Deep Dive Reviews"
              description="Looking for the best restaurant experience? Observe how OSO
          evaluates atmosphere, culinary highlights, and more"
              isMobile={isMobile}
            />
            <Slide  {...settings}>
              <Phone title="OSO" obj={"/assets/video/under-deep-review-oso.mp4"} />
              <Phone title="GPT" obj={"/assets/video/under-deep-review-gpt.mp4"} />
            </Slide>
          </>}
        </div>

        <div className="flex justify-center items-center pt-14">
          <Button
            label="Join Waitlist"
            arrowIcon={true}
            link="https://eijfn1o56i0.typeform.com/to/szT5l8hI?typeform-source=oso.ai"
            target="_blank"
          />
        </div>
      </div>
    </section>
  );
};

export default Comparison;
