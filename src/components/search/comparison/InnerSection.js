import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { Pagination } from "swiper/modules";
import "react-slideshow-image/dist/styles.css";
import Phone from "./Phone";
import ComparisonContent from "./ComparisonContent";
import { Swiper, SwiperSlide } from "swiper/react";

const InnerSection = () => {
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

  // const settings = {
  //   arrows: false,
  //   slidesToScroll: 1,
  //   slidesToShow: 1,
  //   indicators: true,
  //   autoplay: false,
  //   infinite: false,
  // };

  return (
    <div
      id="animation-container"
      className="flex flex-col md:justify-center top-0 bg-white pt-8 md:pt-24"
      //   ref={container}
    >
      <div className="md:flex md:flex-nowrap flex-wrap justify-between">
        <div className="contentWrap w-full md:w-[346px] md:mt-[52px] flex flex-col gap-12 md:gap-9 flex-grow-0 flex-shrink-0 basis-auto mb-12 sm:mb-0">
          {/* Stay Updated */}
          <div
            className={`text-block opacity-100 cursor-pointer ${
              divVisibility.stay ? "md:opacity-100" : "md:opacity-20"
            }`}
            onClick={() => toggleHandler("stay")}
          >
            <ComparisonContent
              title=" Stay Updated"
              description="Get instant news updates like the recent Maui Fires. Watch OSO
          gather real-time information from diverse sources."
              isMobile={isMobile}
            />
          </div>

          {/* Stay Updated Mobile */}
          {!isDesktop && (
            <div className="sm:mx-0">
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
                    <Phone title="OSO" obj="869795820" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!h-auto">
                  <div className="each-slide-effect">
                    <Phone title="ChatGPT" obj="869795832" />
                  </div>
                </SwiperSlide>
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
              title="Plan Your Events"
              description="Wondering about the Grand Prix in Las Vegas? From dates to ticket pricing and seat recommendations, see OSO fetch it all."
              isMobile={isMobile}
            />
          </div>

          {/* Plan your event mobile*/}

          {!isDesktop && (
            <div className="sm:mx-0">
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
                    <Phone title="OSO" obj="869795741" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!h-auto">
                  <div className="each-slide-effect">
                    <Phone title="ChatGPT" obj="869795758" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          )}

          {!isMobile && (
            <div
              className={`text-block cursor-pointer ${
                divVisibility.deep ? "md:opacity-100" : "md:opacity-20"
              }`}
              onClick={() => toggleHandler("deep")}
            >
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
                className={`phoneWrap flex flex-nowrap md:justify-end 0 md:mt-0 mt-16 absolute left-0 top-0 right-0 bottom-0 opacity-0 transition-opacity duration-300 ease-in-out ${
                  divVisibility.stay ? "opacity-100" : ""
                }`}
              >
                <Phone title="OSO" obj="869795820" />
                <Phone title="ChatGPT" obj="869795832" />
              </div>
              <div
                className={`phoneWrap flex flex-nowrap md:justify-end 0 md:mt-0 mt-16 absolute left-0 top-0 right-0 bottom-0 opacity-0 transition-opacity duration-300 ease-in-out ${
                  divVisibility.plan ? "opacity-100" : ""
                }`}
              >
                <Phone title="OSO" obj="869795741" />
                <Phone title="ChatGPT" obj="869795758" />
              </div>
              <div
                className={`phoneWrap flex flex-nowrap md:justify-end 0 md:mt-0 mt-16 absolute left-0 top-0 right-0 bottom-0 opacity-0 transition-opacity duration-300 ease-in-out ${
                  divVisibility.deep ? "opacity-100" : ""
                }`}
              >
                <Phone title="OSO" obj="869795782" />
                <Phone title="ChatGPT" obj="869795803" />
              </div>
            </div>
          </div>
        )}

        {/* Mobile Views */}
        {!isDesktop && (
          <>
            <ComparisonContent
              title="Deep Dive Reviews"
              description="Looking for the best restaurant experience? Observe how OSO
      evaluates atmosphere, culinary highlights, and more"
              isMobile={isMobile}
            />
            <div className=" sm:mx-0 mt-12 sm:mt-0">
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
                    <Phone title="OSO" obj="869795782" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!h-auto">
                  <div className="each-slide-effect">
                    <Phone title="ChatGPT" obj="869795803" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InnerSection;
