import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { Pagination } from "swiper/modules";
import "react-slideshow-image/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";

import ComparisonContent from "../ComparisonContent/ComparisonContent";
import Phone from "../Phone/Phone";

const InnerSections = ({
  titleOne,
  descriptionOne,
  titleTwo,
  descriptionTwo,
  titleThree,
  descriptionThree,
  oso,
  chatgpt,
  phoneoneOso,
  phoneOneChatGPT,
  phoneTwoOso,
  phoneTwoChatGPT,
  phoneThreeOso,
  phoneThreeChatGPT,
}) => {
  // const container = useRef();
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" });
  const [isMobile, setIsMobile] = useState(false);
  const [divVisibility, setDivVisibility] = useState({
    stay: true,
    plan: false,
    deep: false,
  });

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

  const toggleHandler = (target) => {
    setDivVisibility((prevVisibility) => ({
      stay: target === "stay" ? !prevVisibility.stay : false,
      plan: target === "plan" ? !prevVisibility.plan : false,
      deep: target === "deep" ? !prevVisibility.deep : false,
    }));
  };

  return (
    <div
      id="animation-container"
      className="flex flex-col md:justify-center top-0 bg-white pt-8 md:pt-24"
      //   ref={container}
    >
      <div className="md:flex md:flex-nowrap flex-wrap justify-between">
        <div className="contentWrap w-full md:w-[346px] md:mt-[52px] flex flex-col gap-12 md:gap-9 flex-grow-0 flex-shrink-0 basis-auto md:mb-12 mb-8 sm:mb-0">
          {/* Stay Updated */}
          <div
            className={`text-block opacity-100 cursor-pointer ${
              divVisibility.stay ? "md:opacity-100" : "md:opacity-20"
            }`}
            onClick={() => toggleHandler("stay")}
          >
            <ComparisonContent
              title={titleOne}
              description={descriptionOne}
              isMobile={isMobile}
            />
          </div>

          {/* Stay Updated Mobile */}
          {!isDesktop && (
            <div className="-mx-6 sm:mx-0">
              <Swiper
                spaceBetween={-20}
                slidesPerView={1.15}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="!z-auto mobSwiper"
              >
                <SwiperSlide className="!h-auto">
                  <div className="each-slide-effect">
                    <Phone title={oso} obj={phoneoneOso} />
                  </div>
                </SwiperSlide>
                {phoneOneChatGPT && (
                  <SwiperSlide className="!h-auto">
                    <div className="each-slide-effect">
                      <Phone title={chatgpt} obj={phoneOneChatGPT} />
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          )}

          {/* Plan your event */}
          <div
            className={`text-block cursor-pointer ${
              divVisibility.plan ? "md:opacity-100" : "md:opacity-20"
            }`}
            onClick={() => toggleHandler("plan")}
          >
            <ComparisonContent
              title={titleTwo}
              description={descriptionTwo}
              isMobile={isMobile}
            />
          </div>

          {/* Plan your event mobile*/}

          {!isDesktop && (
            <div className="-mx-6 sm:mx-0">
              <Swiper
                spaceBetween={-20}
                slidesPerView={1.15}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="!z-auto mobSwiper"
              >
                <SwiperSlide className="!h-auto">
                  <div className="each-slide-effect">
                    <Phone title={oso} obj={phoneTwoOso} />
                  </div>
                </SwiperSlide>
                {phoneTwoChatGPT && (
                  <SwiperSlide className="!h-auto">
                    <div className="each-slide-effect">
                      <Phone title={chatgpt} obj={phoneTwoChatGPT} />
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          )}

          <div
            className={`text-block cursor-pointer ${
              divVisibility.deep ? "md:opacity-100" : "md:opacity-20"
            }`}
            onClick={() => toggleHandler("deep")}
          >
            <ComparisonContent
              title={titleThree}
              description={descriptionThree}
              isMobile={isMobile}
            />
          </div>
          {!isDesktop && (
            <div className="-mx-6 sm:mx-0">
              <Swiper
                spaceBetween={-20}
                slidesPerView={1.15}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="!z-auto mobSwiper"
              >
                <SwiperSlide className="!h-auto">
                  <div className="each-slide-effect">
                    <Phone title={oso} obj={phoneThreeOso} />
                  </div>
                </SwiperSlide>
                {phoneTwoChatGPT && (
                  <SwiperSlide className="!h-auto">
                    <div className="each-slide-effect">
                      <Phone title={chatgpt} obj={phoneThreeChatGPT} />
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          )}
        </div>

        {/* Desktop phones */}
        {!isMobile && (
          <div className="right-elemetns relative overflow-hidden w-full flex ">
            <div className="w-full h-full relative overflow-hidden">
              <div
                className={`phoneWrap flex flex-nowrap md:${
                  phoneOneChatGPT ? "justify-end" : " justify-center"
                }  0 md:mt-0 mt-16 absolute left-0 top-0 right-0 bottom-0 opacity-0 transition-opacity duration-300 ease-in-out ${
                  divVisibility.stay ? "opacity-100" : ""
                }`}
              >
                {phoneoneOso && <Phone title={oso} obj={phoneoneOso} />}
                {phoneOneChatGPT && (
                  <Phone title={chatgpt} obj={phoneOneChatGPT} />
                )}
              </div>
              <div
                className={`phoneWrap flex flex-nowrap md:${
                  phoneTwoChatGPT ? "justify-end" : "justify-center"
                } 0 md:mt-0 mt-16 absolute left-0 top-0 right-0 bottom-0 opacity-0 transition-opacity duration-300 ease-in-out ${
                  divVisibility.plan ? "opacity-100" : ""
                }`}
              >
                {phoneTwoOso && <Phone title={oso} obj={phoneTwoOso} />}
                {phoneTwoChatGPT && (
                  <Phone title={chatgpt} obj={phoneTwoChatGPT} />
                )}
              </div>
              <div
                className={`phoneWrap flex flex-nowrap md:${
                  phoneThreeChatGPT ? "justify-end" : "justify-center"
                } 0 md:mt-0 mt-16 absolute left-0 top-0 right-0 bottom-0 opacity-0 transition-opacity duration-300 ease-in-out ${
                  divVisibility.deep ? "opacity-100" : ""
                }`}
              >
                {phoneThreeOso && <Phone title={oso} obj={phoneThreeOso} />}
                {phoneThreeChatGPT && (
                  <Phone title={chatgpt} obj={phoneThreeChatGPT} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default InnerSections;
