import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { shortVideosData } from "@/constant/usecase";
import UseCaseCard from "../usecaseCard";
import Button from "../common/Button";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination"
import "swiper/css/free-mode";

const OSOUseCaseLanding = ({ type }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" });
  // const slidesOffsetBefore = isDesktop ? 100 : 0;

  const videoData = useMemo(() => {
    return shortVideosData.filter((v) => v.type.includes(type));
  }, [type]);

  // const videoData = videoData?.slice(0, 6);

  return (
    <>
      <section className="px-6 mx-auto max-w-6xl">
        <div className="md:text-center text-satrt pt-16 pb-16 md:pt-16 mx-2">
          <h3 className="text-[40px] md:text-5xl font-extrabold text-black md:leading-[64px] leading-tight">
            Discover how people are using OSO
          </h3>
        </div>

        <div className="md:pb-16 md:pt-0 md:py-16 relative  usecase-slider">
          <Swiper
            spaceBetween={16}
            slidesPerView={"4"}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            // pagination={{
            //   clickable: true,
            // }}
            freeMode={true}
            modules={[FreeMode, Navigation]}
            grabCursor={false}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2.5,
                pagination: false,
              },
              1020: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
              1537: {
                slidesPerView: 3,
              },
              1921: {
                slidesPerView: 3,
              },
            }}
            className="!z-auto"
          >
            <>
              <div className="swiper-button-next !z-20 md:mr-4 !w-12 !h-12 rounded-full bg-gray-40 p-3 transition-all duration-300 hover:bg-gray-50 focus:bg-gray-30">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="swiper-button-prev !z-20 md:ml-4 !w-12 !h-12 rounded-full bg-gray-40 p-3 transition-all duration-300 hover:bg-gray-50 focus:bg-gray-30">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="rotate-180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                    fill="black"
                  />
                </svg>
              </div>
              {isDesktop &&
                <>
                  <div className="bg-gradient-slider w-52 h-full absolute left-0 top-0 z-10 rotate-180 l-gr-control"></div>
                  <div className="bg-gradient-slider w-52 h-full absolute right-0 top-0 z-10 r-gr-control"></div>
                </>

              }
            </>

            {videoData &&
              videoData.map((v, index) => (
                <SwiperSlide key={index}>
                  <UseCaseCard
                    videoId={v.videoId}
                    category={v.category}
                    title={v.title}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="flex justify-center items-center sm:pb-6 md:pb-24 w-full sm:mb-8 md:mb-0">
          <Button
            label="Try OSO"
            arrowIcon={true}
            link="https://l.oso.ai/NewUser"
            target="_blank"
          />
        </div>
      </section>
    </>
  );
};

export default OSOUseCaseLanding;
