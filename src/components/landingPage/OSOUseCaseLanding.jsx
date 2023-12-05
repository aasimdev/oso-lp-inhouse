import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { shortVideosData } from "@/constant/usecase";
import UseCaseCard from "../usecaseCard";
import Link from "next/link";

const OSOUseCaseLanding = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" });
  const slidesOffsetBefore = isDesktop ? 100 : 0;

  const videoData = shortVideosData?.slice(0, 6);

  return (
    <>
      <div className="md:text-center text-satrt pt-16 md:pt-[80px] mx-2">
        <h3 className="md:text-5xl text-[40px] font-extrabold text-black md:leading-[64px] leading-tight">
          Discover how people are using OSO
        </h3>
      </div>

      <div className="py-16  tSlider relative">
        <Swiper
          spaceBetween={16}
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
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.3,
              pagination: false,
            },
            1020: {
              slidesPerView: 1.9,
            },
            1200: {
              slidesPerView: 2.2,
            },
            1400: {
              slidesPerView: 2.45,
            },
            1537: {
              slidesPerView: 3.2,
            },
            1921: {
              slidesPerView: 4.3,
            },
          }}
          className="!z-auto"
        >
          {isDesktop && (
            <>
              <div className="swiper-button-next md:mr-24 !w-12 !h-12 rounded-full bg-gray-40 p-3 transition-all duration-300 hover:bg-gray-50 focus:bg-gray-30">
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
              <div className="swiper-button-prev md:ml-24 !w-12 !h-12 rounded-full bg-gray-40 p-3 transition-all duration-300 hover:bg-gray-50 focus:bg-gray-30">
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
            </>
          )}
          {videoData &&
            videoData.map((v, index) => (
              <SwiperSlide key={index} className="!w-[348px] !h-[580px]">
                <UseCaseCard
                  videoId={v.videoId}
                  category={v.category}
                  title={v.title}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="flex justify-center items-center pb-6 md:pb-16 w-full">
        <Link
          href="https://l.oso.ai/NewUser"
          className="tryOSOButton bg-purple text-white text-2xl font-normal rounded-lg"
        >
          Try Using OSO
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default OSOUseCaseLanding;
