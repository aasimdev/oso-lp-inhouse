"use client"
import React from "react"
import Hero from "./Hero"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Pagination } from "swiper/modules"
import { useMediaQuery } from "react-responsive"
import Jason from "../../../../public/assets/images/jason.png"
import Jan from "../../../../public/assets/images/jan.png"
import Ciaran from "../../../../public/assets/images/man.jpeg"
import Michael from "../../../../public/assets/images/face.png"
import Steve from "../../../../public/assets/images/steveA.png"
import Manu from "../../../../public/assets/images/manu.jpg"
import TestimonialItem from "@/components/testimonials/Item"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/free-mode"
import NewsLetter from "@/components/news-letter"
import Chat from "./Chat"
import Feed from "./Feed"
import SearchAndOtherForMobile from "./SearchAndOthers/SearchAndOtherForMobile"
import SearchAndOtherForLaptop from "./SearchAndOthers/SearchAndOtherForLaptop"
import FAQ from "@/components/FAQ/Index"
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
function SeenOn({ }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" })
  const slidesOffsetBefore = isDesktop ? 100 : 0;

  const accordionData = [
    {
      id: 1,
      question: "Benefits of OSO?",
      answer: `<ul class="list-disc p-[revert] space-y-6">

        <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Enhanced Results:</span> OSO's advanced AI Search provides more accurate and relevant search outcomes.</li>

        <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Up to date & un-biased:</span> Find the information you need without the censorship or limitations of other AI platforms.</li>

        <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Boosted Productivity:</span> OSO does the time consuming and often boring tasks, such as reading through websites to find small bits of information you actually need, freeing you to concentrate on tasks that leverage unique human skills and creativity.</li>
        </ul>`
    },
    {
      id: 2,
      question: "Why should I choose OSO?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">While most AI applications rely on ChatGPT or existing AI solutions that have severe limitations, OSO has created its own AI technology that provides a more robust and useful user experience.</p>`
    },
    {
      id: 3,
      question: "How is it different than other AI?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">You can use OSO Free forever with certain usage limitations such as 50 searches and chats per day. If you want to unlock the full power of OSO, it only costs $20/mo and will return 100x the value in productivity and time-savings.</p>`
    },

    {
      id: 4,
      question: "How Does OSO's AI Differ From Others?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO currently has a huge demand from people across the world, and we are letting in users from the waitlist as quickly as possible. Once you gain access, you can use OSO from Web, Android, and iOS.</p>`
    },
    {
      id: 5,
      question: "What is pricing?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO currently has a huge demand from people across the world, and we are letting in users from the waitlist as quickly as possible. Once you gain access, you can use OSO from Web, Android, and iOS.</p>`
    },
    {
      id: 6,
      question: "On which platforms can I access OSO?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO currently has a huge demand from people across the world, and we are letting in users from the waitlist as quickly as possible. Once you gain access, you can use OSO from Web, Android, and iOS.</p>`
    }

  ];

  return (
    <>
      <div className='px-6 mx-auto max-w-6xl'>

        <Hero />

        <SearchAndOtherForMobile />
        <SearchAndOtherForLaptop />
        <Chat />
        <Feed />

        <div className='md:flex justify-center items-center pt-8 md:pt-[60px]'>
          <NewsLetter arrowIcon label='Join Waitlist' />
        </div>

        <h2 className='text-[40px] leading-tight md:text-5xl md:leading-relaxed font-bold text-black text-center mt-24'>
          Many people already feel the magic
        </h2>
      </div>
      <div className='pb-8 mt-24 tSlider relative'>

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

export default SeenOn
