"use client"
import React from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Pagination } from "swiper/modules"
import { useMediaQuery } from "react-responsive"
import Jason from "../../../public/assets/images/jason.png"
import Jan from "../../../public/assets/images/jan.png"
import Ciaran from "../../../public/assets/images/man.jpeg"
import Michael from "../../../public/assets/images/face.png"
import Steve from "../../../public/assets/images/steveA.png"
import Manu from "../../../public/assets/images/manu.jpg"
import TestimonialItem from "@/components/testimonials/Item"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/free-mode"
import NewsLetter from "@/components/news-letter"
import FAQ from "@/components/FAQ/Index"
import GoogleAnalytics from "@/utils/google-analytics/anaylics"
import Banner from "@/components/common/banner/Index"
import Hero from "@/components/landingPage/Hero"
import Chat from "@/components/landingPage/Chat"
import Feed from "@/components/landingPage/Feed"
import SearchAndOtherForLaptop from "@/components/landingPage/SearchAndOthers/SearchAndOtherForLaptop"

const testimonialData = [
  {
    name: "Jason K.",
    description:
      "I stopped using chatGPT because it never gives me answers I want. I use OSO daily because it's real-time and uncensored giving me exactly what I need.",
    image: Jason,
  },
  {
    name: "Jan Gerych",
    description: "Amazing, this changes the world.",
    image: Jan,
  },
  {
    name: "Michael S.",
    description:
      "It's next level from chatGPT bc you can pull data about real time trends, sentiment and analytics. Content creators are going to make a lot of money with OSO.",
    image: Michael,
  },
  {
    name: "Steve A.",
    description: "Most useful AI i've ever seen.",
    image: Steve,
  },
  {
    name: "Manu A.",
    description: "This is power like i've never seen before.",
    image: Manu,
  },
  {
    name: "Ciaran",
    description: "Really powerful tool! Can see this being used for so much.",
    image: Ciaran,
  },
]
function LandingPage({ }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" })
  const slidesOffsetBefore = isDesktop ? 100 : 0

  const accordionData = [
    {
      id: 1,
      question: "Why should I choose OSO?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO offers a more advanced and user-friendly suite of AI tools and services than any competitor and is constantly evolving, putting the needs of its users first.</p>`,
    },
    {
      id: 2,
      question: "What is the difference between OSO Search and Chat?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">AI Chatbots are limited in the real-time information they can gather due to how they are created and trained.
      <br /><br />
      OSO Search solves this by using AI to scan the internet for the latest information about your question and provides a static answer.
      <br /><br />
      OSO Chat on the other-hand is an advanced AI Chatbot trained until September 2023 which continuously learns as more questions are asked.
      <br /><br />
      The core difference is that OSO Chat is interactive and users can have a back-and-forth conversation, while OSO Search simply delivers an answer so you don't have to waste time reading through many websites to find it.</p>`,
    },
    {
      id: 3,
      question: "What does uncensored & unbiased mean?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO believes in unrestricted access to knowledge; therefore, many of the censorship constraints surrounding topics on other AI platforms are lifted with OSO Chat. By creating our own uncensored LLM, we are able to provide users with an AI Chat that is actually useful to them and can give them the answers they need.<br /><br />Unbiased, means that we train OSO models with all available information and always try our best to take a neutral stance, outside of politics or popular opinion. We believe in letting our users make their own decisions on complex subjects.</p>`,
    },

    {
      id: 4,
      question: "What is the pricing?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO is free to use with certain usage limitations. If you want to unlock the full power of OSO, it only costs $20/mo and will return 100x the value in productivity and time-savings.</p>`,
    },
    {
      id: 5,
      question: "How do I get started?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO currently has a huge demand from people across the world, and we are letting in users from the waitlist as quickly as possible. Once you gain access, you can use OSO from Web, Android, and iOS.</p>`,
    },
  ]

  return (
    <>
      <GoogleAnalytics gaTrackingID='G-2N2XN2FQX1' />
      <Hero />
      <div className='px-6 mx-auto max-w-6xl'>
        <SearchAndOtherForLaptop />
        <Chat />
        <Feed />

        <div className='md:flex justify-center items-center pt-12 md:pt-[60px] pb-24'>
          <NewsLetter arrowIcon label='Join Waitlist' />
        </div>

        <h2 className='text-[40px] leading-tight md:text-5xl md:leading-relaxed font-bold text-black text-center'>
          Many people already feel the magic
        </h2>
      </div>
      <div className='md:pb-8 md:mt-24 mt-16 tSlider relative'>
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
          className='!z-auto'
        >
          {isDesktop && (
            <>
              <div className='swiper-button-next md:mr-24 !w-12 !h-12 rounded-full bg-gray-40 p-3 transition-all duration-300 hover:bg-gray-50 focus:bg-gray-30'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z'
                    fill='black'
                  />
                </svg>
              </div>
              <div className='swiper-button-prev md:ml-24 !w-12 !h-12 rounded-full bg-gray-40 p-3 transition-all duration-300 hover:bg-gray-50 focus:bg-gray-30'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='rotate-180'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z'
                    fill='black'
                  />
                </svg>
              </div>
            </>
          )}
          {testimonialData &&
            testimonialData.map((item, index) => (
              <SwiperSlide key={index} className='!h-auto'>
                <TestimonialItem
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <FAQ accordionData={accordionData} />
    </>
  )
}

export default LandingPage
