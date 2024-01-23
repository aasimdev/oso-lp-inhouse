import React, { useEffect, useRef, useState } from "react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { useMediaQuery } from "react-responsive";
import Typewriter from "typewriter-effect";
const SearchAndOtherForMobile = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" });
  const slidesOffsetBefore = isDesktop ? 100 : 0;
  const [isTypingStarted, setTypingStarted] = useState(false);
  const [stringTypeOut, setStringTypeOut] = useState(false);
  const targetDivRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            setTypingStarted(true);
          }
        });
      },
      { threshold: 1 }
    );

    const currentTargetDiv = targetDivRef.current;

    observer.observe(currentTargetDiv);

    return () => {
      observer.unobserve(currentTargetDiv);
    };
  }, []);

  return (
    <div
      ref={targetDivRef}
      className="lg:hidden md:py-8 tSlider relative mt-16"
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
        }}
        freeMode={true}
        modules={[FreeMode, Navigation, Pagination]}
        grabCursor={true}
        slidesOffsetBefore={slidesOffsetBefore}
        breakpoints={{
          0: {
            slidesPerView: 1.05,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1.3,
          },
        }}
        className="!z-auto flex"
      >
        <SwiperSlide className=" pb-20 ">
          <div className="bg-gradient-to-b from-[#ffffff00] to-[#8CDCD0] hover:from-[#ffffff00] hover:to-[#58C2B1] bg-blue-100 w-full md:w-[532px]  group  p-8 rounded-2xl flex flex-col">
            <div>
              <p className="text-[32px] md:text-5xl font-bold">OSO Search</p>
              <p className="text-2xl font-light mt-2">
                Delivers a{" "}
                <strong className="text-2xl font-medium ">
                  comprehensive answer.
                </strong>
              </p>
            </div>
            <div className="h-[400px]">
              {isTypingStarted && stringTypeOut ? (
                <div className="bg-black text-white rounded-[20px] p-4 md:mt-16 mt-[56px] ">
                  <p className="text-xl md:text-2xl font-medium ">
                    🌍Top Sushi Places in Prague
                  </p>
                  <br />

                  <p className="text-xl md:text-2xl font-normal  ">
                    Yami Sushi House: A popular sushi spot praised for its
                    exquisite sushi...
                  </p>
                </div>
              ) : (
                <div className="text-[40px] font-normal rounded-[20px] mt-[56px]">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(40)
                        .typeString(
                          "Where is the best sushi restaurant in Prague? 🍣"
                        )
                        .pauseFor(2000)
                        .callFunction(() => {
                          setStringTypeOut(true);
                        })
                        .start();
                    }}
                  />
                </div>
              )}
            </div>
            <div className="flex justify-end items-center transform translate-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
              <p className="pr-4">Learn more</p>
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16.5" cy="16" r="16" fill="white" />
                <path
                  d="M9.38911 16.8891L20.2069 16.8891L15.238 21.858L16.5002 23.1113L23.6113 16.0002L16.5002 8.88911L15.2469 10.1424L20.2069 15.1113L9.38911 15.1113L9.38911 16.8891Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" pb-20">
          <div className="bg-blue-100 bg-gradient-to-b from-[#F6F9FA] to-[#DEDEDE] w-full md:w-[532px]   p-8 rounded-2xl flex flex-col">
            <div>
              <p className="text-[32px] md:text-5xl font-bold">Others</p>
              <p className="text-2xl font-light mt-2">
                Delivers an{" "}
                <strong className="text-2xl font-medium ">
                  unhelpful, outdated result.
                </strong>
              </p>
            </div>
            <div className="h-[400px]">
              {isTypingStarted && stringTypeOut ? (
                <div className="bg-black text-white rounded-[20px] p-4  md:mt-16 mt-[56px]">
                  <p className="text-xl md:text-2xl font-normal">
                    I don&apos;t have access to real-time information or current
                    restaurant reviews, as my knowledge was last updated in
                    September 2021.
                  </p>
                </div>
              ) : (
                <div className="text-[40px] font-normal rounded-[20px] mt-[56px]">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(40)
                        .typeString(
                          "Where is the best sushi restaurant in Prague? 🍣"
                        )
                        .pauseFor(2000)
                        .callFunction(() => {
                          setStringTypeOut(true);
                        })
                        .start();
                    }}
                  />
                </div>
              )}
            </div>
            <div className=" h-8 "></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SearchAndOtherForMobile;
