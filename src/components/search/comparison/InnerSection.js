import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import NewsLetter from "@/components/news-letter";
import Phone from "./Phone";
import ComparisonContent from "./ComparisonContent";


const InnerSection = () => {

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
        ScrollTrigger.refresh();
        if (isDesktop) {
            const textBlocks = gsap.utils.toArray('.text-block');
            const rightElements = gsap.utils.toArray('.phoneWrap');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top+=335px',
                    // start: 'top',
                    end: '+=300%',
                    pin: true,
                    scrub: true,
                    // markers: true,
                },
            });

            rightElements.forEach((img, i) => {
                if (rightElements[i + 1]) {
                    tl.to(img, { opacity: 0, translateY: 40 }, '+=0.5')
                        .to(rightElements[i + 1], { opacity: 1, translateY: 0 }, '<')
                        .to(textBlocks, { yPercent: '-18%', opacity: 0.2, }, '<')
                        .to(textBlocks[i + 1], { yPercent: '18%', opacity: 1 }, '<');
                }
            });
            tl.to({}, {}, '+=0.5');
        }
    }, []);


    const settings = {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        indicators: true,
        autoplay: false,
        infinite: false
    }


    return (
        <div className="flex flex-col md:justify-center md:h-screen !top-0" ref={container}>
            <div className="md:flex md:flex-nowrap flex-wrap justify-between">
                <div className="contentWrap w-full md:w-[346px] md:mt-[52px] flex flex-col gap-12 md:gap-9 flex-grow-0 flex-shrink-0 basis-auto mb-12 sm:mb-0">

                    {/* Stay Updated */}
                    <div className="text-block opacity-100">
                        <ComparisonContent
                            title=" Stay Updated"
                            description="  Get instant news updates like the recent Maui Fires. Watch OSO
          gather real-time information from diverse sources."
                            isMobile={isMobile}
                        />
                    </div>

                    {/* Stay Updated Mobile */}
                    {!isDesktop && (
                        <div className="-mx-6 sm:mx-0">
                            <Slide  {...settings} >
                                <Phone title="OSO" obj="869795820" />
                                <Phone title="ChatGPT" obj="869795832" />
                            </Slide>
                        </div>
                    )}


                    {/* Plan your event */}
                    <div className="text-block md:opacity-20">
                        <ComparisonContent
                            title="Plan Your Events"
                            description="Wondering about the Grand Prix in Las Vegas? From dates to ticket pricing and seat recommendations, see OSO fetch it all."
                            isMobile={isMobile}
                        />
                    </div>


                    {/* Plan your event mobile*/}
                    {!isDesktop && (
                        <div className="-mx-6 sm:mx-0">
                            <Slide  {...settings} >
                                <Phone title="OSO" obj="869795741" />
                                <Phone title="ChatGPT" obj="869795758" />
                            </Slide>
                        </div>
                    )}


                    {!isMobile && (
                        <div className="text-block md:opacity-20">
                            <ComparisonContent
                                title="Deep Dive Reviews"
                                description="Looking for the best restaurant experience? Observe how OSO
           evaluates atmosphere, culinary highlights, and more"
                                isMobile={isMobile}
                            />
                        </div>
                    )}
                </div>


                {/* Desktop phones */}
                {!isMobile && (
                    <div className="right-elemetns relative overflow-hidden w-full flex ">
                        <div className="w-full h-full relative overflow-hidden">
                            <div
                                className="phoneWrap flex flex-nowrap md:justify-end 0 md:mt-0 mt-16 opacity-100 absolute left-0 top-0 right-0 bottom-0 gap-5"
                            >
                                <Phone title="OSO" obj="869795820" />
                                <Phone title="ChatGPT" obj="869795832" />
                            </div>
                            <div
                                className="phoneWrap flex flex-nowrap md:justify-end 0 md:mt-0 mt-16 opacity-0 absolute left-0 top-0 right-0 bottom-0 gap-5"
                            >
                                <Phone title="OSO" obj="869795741" />
                                <Phone title="ChatGPT" obj="869795758" />
                            </div>
                            <div
                                className="phoneWrap flex flex-nowrap md:justify-end 0 md:mt-0 mt-16 opacity-0 absolute left-0 top-0 right-0 bottom-0 gap-5"
                            >
                                <Phone title="OSO" obj="869795782" />
                                <Phone title="ChatGPT" obj="869795803" />
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
                            <Phone title="OSO" obj="869795782" />
                            <Phone title="ChatGPT" obj="869795803" />
                        </Slide>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default InnerSection