"use client"
import React from "react"
import Hero from "./Hero"
import { SeenOnCard } from "./SeenOnCard"
import Image from "next/image"
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
function SeenOn({}) {
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" })
  const slidesOffsetBefore = isDesktop ? 100 : 0
  return (
    <>
      <div className='px-6 mx-auto max-w-6xl'>
        <Hero />
        {/* <div className='md:text-center text-left mb-16 px-6 mx-auto max-w-6xl'>
          <h2 className='text-[40px] leading-tight md:text-5xl md:leading-relaxed font-bold text-black'>
            As Seen on
          </h2>
        </div> */}
        <div className='lg:hidden md:py-8 tSlider relative mt-16'>
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
                spaceBetween:5
              
              },
              768: {
                slidesPerView: 1.3,
              
              },
          
            }}
            className='!z-auto h-[630px]'
          >
            <SwiperSlide className='!h-auto'>
              <SeenOnCard
                className={
                  "bg-gradient-to-b from-[#ffffff00] to-[#8CDCD0] hover:from-[#ffffff00] hover:to-[#58C2B1]"
                }
                learnMore={
                  <div className='flex justify-end  items-center mt-4 '>
                    <p className='pr-4 cursor-pointer'>Lean more</p>
                    <svg
                      className='cursor-pointer'
                      width='33'
                      height='32'
                      viewBox='0 0 33 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle cx='16.5' cy='16' r='16' fill='white' />
                      <path
                        d='M9.38911 16.8891L20.2069 16.8891L15.238 21.858L16.5002 23.1113L23.6113 16.0002L16.5002 8.88911L15.2469 10.1424L20.2069 15.1113L9.38911 15.1113L9.38911 16.8891Z'
                        fill='black'
                      />
                    </svg>
                  </div>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <SeenOnCard className={"gradient-seen-on-gray"} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='hidden lg:flex flex-row justify-between'>
          <SeenOnCard
            className={
              "bg-gradient-to-b from-[#ffffff00] to-[#8CDCD0] hover:from-[#ffffff00] hover:to-[#58C2B1]"
            }
            learnMore={
              <div className='flex justify-end  items-center mt-4 '>
                <p className='pr-4 cursor-pointer'>Lean more</p>
                <svg
                  className='cursor-pointer'
                  width='33'
                  height='32'
                  viewBox='0 0 33 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='16.5' cy='16' r='16' fill='white' />
                  <path
                    d='M9.38911 16.8891L20.2069 16.8891L15.238 21.858L16.5002 23.1113L23.6113 16.0002L16.5002 8.88911L15.2469 10.1424L20.2069 15.1113L9.38911 15.1113L9.38911 16.8891Z'
                    fill='black'
                  />
                </svg>
              </div>
            }
          />
          <SeenOnCard className={"gradient-seen-on-gray"} />
        </div>
      </div>
      <div className='md:py-8 tSlider relative'>
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
      {/* chat */}
      {/* <div className='bg-gradient-to-b from-[#D0FAD2] to-[#ABFFAF] hover:from-[#D0FAD2] hover:to-[#7EF684] mt-[56px] p-[64px] h-[571px] rounded-2xl'>
        <div className='flex justify-between items-start'>
          <div>
            <p className='text-5xl font-bold'>Chat</p>
            <p className='text-2xl font-light mt-2'>
              Chat
              <strong className='text-2xl font-medium'>uncensored</strong>
              about anything
            </p>
          </div>
          <div>
            <div className='flex justify-end items-center cursor-pointer'>
              <p className='pr-4'>Lean more</p>
              <svg
                width='33'
                height='32'
                viewBox='0 0 33 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='16.5' cy='16' r='16' fill='white' />
                <path
                  d='M9.38911 16.8891L20.2069 16.8891L15.238 21.858L16.5002 23.1113L23.6113 16.0002L16.5002 8.88911L15.2469 10.1424L20.2069 15.1113L9.38911 15.1113L9.38911 16.8891Z'
                  fill='black'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='flex gap-[52.59px] items-center  mt-[88px]'>
          <div className='w-[376px] rounded-[20px] bg-white'>
            <p className='p-4 text-xl font-normal'>Is Putin a great leader? </p>
          </div>
          <Image
            src='/assets/icons/chat-emoji.svg'
            alt='Example SVG'
            width={69}
            height={64}
          />
        </div>
        <div className='flex justify-end mt-[51px] gap-[39.32px]'>
          <Image
            src='/assets/icons/smily-face-emoji.svg'
            alt='Example SVG'
            width={69}
            height={64}
          />
          <div className='flex items-start gap-2'>
            <Image
              src='/assets/icons/oso-logo-black.svg'
              alt='Example SVG'
              width={24}
              height={34}
            />
            <div className='w-[617px] rounded-[20px] bg-black'>
              <p className='p-4 text-xl font-normal text-white'>
                Ultimately, whether Putin is considered a great leader or not
                depends on one's perspective and the specific criteria used to
                assess leadership.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
     

      <div className='bg-gradient-to-b from-[#FEF5CC] to-[#FEF4CC] hover:from-[#FEF5CC] hover:to-[#FEF4CC] mt-[56px] p-[64px] h-[571px] rounded-2xl'>
        <div className='flex justify-between items-center'>
          <div>
            <p className='text-5xl font-bold'>Chat</p>
          </div>
          <div>
            <div className='flex justify-end items-center cursor-pointer'>
              <p className='pr-4'>Lean more</p>
              <svg
                width='33'
                height='32'
                viewBox='0 0 33 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='16.5' cy='16' r='16' fill='white' />
                <path
                  d='M9.38911 16.8891L20.2069 16.8891L15.238 21.858L16.5002 23.1113L23.6113 16.0002L16.5002 8.88911L15.2469 10.1424L20.2069 15.1113L9.38911 15.1113L9.38911 16.8891Z'
                  fill='black'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='flex gap-[60px]'>
          <div className=''>
            <p className='text-2xl font-light mt-2'>
              <strong className='text-2xl font-medium'>Summarize</strong>
              your custom news, then inquire with specific questions
            </p>

            <div className='flex items-start gap-2 mt-11'>
              <Image
                src='/assets/icons/oso-logo-black.svg'
                alt='Example SVG'
                width={24}
                height={34}
              />
              <div className='w-[617px] rounded-[20px] bg-black'>
                <p className='p-4 text-xl font-normal text-white'>
                  📝 Report on Apple's iPhone 15 Camera Improvements and
                  Flagship Features
                  <br />
                  <br />
                  📸 Smart Camera Improvements in iPhone 15 The iPhone 15
                  introduces several smart camera improvements. - Larger main
                  sensor for better image quality and low-light performance.
                  <br />
                  ...
                </p>
              </div>
            </div>
          </div>
          <div className='mt-[36px]'>
            <Image
              src='/assets/images/feed-phone.png'
              alt='Example SVG'
              width={316.8}
              height={653.895}
            />
          </div>
        </div>
      </div> */}
    </>
  )
}

export default SeenOn
