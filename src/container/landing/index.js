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
    description: "Most useful AI I've ever seen.",
    image: Steve,
  },
  {
    name: "Manu A.",
    description: "This is power like I've never seen before.",
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
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO introduces an entirely new way to engage with the internet. Packed with three powerful tools – OSO Search, OSO Chat, and OSO News – you can access a wide range of information and engage in conversations without sifting through countless websites and articles. 
      <br /><br />
      OSO saves you time and offers an entirely new interactive experience, as easy as chatting with a friend. Unlike many competitors whose data is limited to 2021, OSO employs cutting-edge models, ensuring you always have up-to-date, uncensored information.</p>`,
    },
    {
      id: 2,
      question: "What is the difference between OSO Search and OSO Chat?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Search is your go-to tool for quick, comprehensive answers. OSO reads through the entire internet to find the latest information and delivers you with results in a visually appealing format. It's your personal research assistant, providing you with real-time, unbiased insights. 
    <br /><br />
OSO Chat, on the other hand, is your conversational companion. It engages in interactive, text-based conversations with you. Unlike other chatbots whose data is limited to 2021, OSO Chat was trained up to September 2023 and continuously learns as more questions are asked. Whether you're looking for a friendly chat or need information presented in a conversational format, OSO Chat is your companion of choice.
    <br /><br />
Together, OSO Search and OSO Chat form a powerful combo, quickly giving you the information you need, in the way that suits you best.</p>`,
    },
    {
      id: 3,
      question: "What does uncensored and unbiased mean?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">At OSO, we're all about unrestricted and open access to knowledge. With OSO Chat, we've removed many of the censorship constraints you might encounter on other AI platforms. Our own uncensored LLM enables OSO Chat to provide users with useful, straightforward answers.
  <br /><br />
When we say "unbiased," we mean we train OSO models to take a neutral stance, free from political or popular opinion. We believe in empowering users to form their own conclusions on complex subjects by presenting information objectively.</p>`,
    },
    {
      id: 4,
      question: "Commitment to Encouraging Responsible Use of Information",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">At OSO, we take our commitment to responsible information use seriously. While we provide uncensored and unbiased access to information, we strongly emphasize that our platform is designed for responsible, legal, and ethical purposes. We do not endorse or support any illegal, harmful, or unethical activities.
  <br /><br />
To ensure responsible use, OSO will require all users to complete a consent form upon joining. This consent form will include a legal disclaimer outlining our guidelines for appropriate use. Additionally, OSO is designed for adult users, and we do not permit access to individuals who are not of legal age in their jurisdiction.
  <br /><br />
Our mission is to empower users with information while promoting ethical conduct and respect for the law. We encourage all OSO users to utilize our platform responsibly and in a manner that upholds these principles.</p>`,
    },

    {
      id: 5,
      question: "What is the pricing?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO is free to use with certain usage limitations. If you want to unlock the full power of OSO, it only costs $20/mo and will return 100x the value in productivity and time-savings.</p>`,
    },
    {
      id: 6,
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
