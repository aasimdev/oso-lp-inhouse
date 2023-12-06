import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import Button from "../common/Button";
import TestimonialItem from "./Item";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// Images

import Jason from "../../../public/assets/images/jason.png";
import Jan from "../../../public/assets/images/jan.png";
import Ciaran from "../../../public/assets/images/man.jpeg";
import Michael from "../../../public/assets/images/face.png";
import Steve from "../../../public/assets/images/steveA.png";
import Manu from "../../../public/assets/images/manu.jpg";
import NewsLetter from "../news-letter";
import OSOUseCaseLanding from "../landingPage/OSOUseCaseLanding";

const testimonialData = [
  {
    name: "Jason K.",
    description:
      "OSO News has completely changed my news-reading routine. Instead of sifting through articles, I just chat with OSO to get the key points. It's like having a personal news reporter!",
    image: Jason,
  },
  {
    name: "Jan Gerych",
    description: "I'm always on the go, and OSO News is my go-to for staying updated. The interactive chat feature lets me ask specific questions, saving hours of reading. Brilliant!",
    image: Jan,
  },
  {
    name: "Michael S.",
    description:
      "OSO News is a game changer in the world of news apps. It's like having a conversation with that friend who can give you quick updates on what’s going on in the world on any topic. I seriously can't imagine going back to traditional news.",
    image: Michael,
  },
  {
    name: "Steve A.",
    description: "I was skeptical at first, but now I am addicted! OSO keeps me informed without overwhelming me. The AI-powered summaries are spot-on, and the chat feature is a game changer for news junkies like me!",
    image: Steve,
  },
  {
    name: "Manu A.",
    description: "OSO News has totally simplified my life. I just ask OSO what I need to know, and it delivers. It's smart, fast, and intuitive. Amazing.",
    image: Manu,
  },
  {
    name: "Ciaran",
    description: "OSO News simplifies my mornings. Quick summaries and interactive chat – it's genius!",
    image: Ciaran,
  },
];

const NewsTestimonials = ({ title }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" });
  const slidesOffsetBefore = isDesktop ? 100 : 0;

  return (
    <section className="pt-12 sm:pt-[120px]">
      {/* <div className="md:text-center text-left mb-16 px-6 mx-auto max-w-6xl">
        <h2 className="text-[40px] leading-tight md:text-5xl md:leading-relaxed font-bold text-black">
          {title || "Many people already feel the magic"}
        </h2>
      </div>

      <div className="md:py-8 tSlider relative">
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
          {testimonialData &&
            testimonialData.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <TestimonialItem
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div> */}
      <OSOUseCaseLanding />
      {title !== "Testimonials" && (
        <div className="px-6 mt-12 mb-6 md:mb-8 mx-auto max-w-6xl text-center">
          <NewsLetter
            label={`Join Waitlist`}
            arrowIcon
            formId={"TestimonialFormId"}
          />
        </div>
      )}
    </section>
  );
};

export default NewsTestimonials;