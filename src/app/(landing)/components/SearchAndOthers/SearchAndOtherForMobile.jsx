import React from "react"
import { FreeMode, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/free-mode"
import { SeenOnCard } from "../SeenOnCard"
import { useMediaQuery } from "react-responsive"
const SearchAndOtherForMobile = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" })
  const slidesOffsetBefore = isDesktop ? 100 : 0
  return (
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
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 1.3,
          },
        }}
        className='!z-auto flex'
      >
        <SwiperSlide className=' pb-20 '>
          <SeenOnCard
            className={
              "bg-gradient-to-b from-[#ffffff00] to-[#8CDCD0] hover:from-[#ffffff00] hover:to-[#58C2B1]"
            }
            title={"OSO Search"}
            learnMore={
              <>
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
              </>
            }
            answerForOso={
              <div className='bg-black text-white p-4 rounded-[20px] mt-16 '>
                <p className='h-24 text-ellipsis overflow-auto'>
                  <p className='text-2xl font-medium '>
                    🌍Top Sushi Places in Prague
                  </p>
                  <br />

                  <p className='text-2xl font-medium  '>
                    Yami Sushi House: A popular sushi spot praised for its
                    exquisite sushi...
                  </p>
                </p>
              </div>
            }
          />
        </SwiperSlide>
        <SwiperSlide className=' pb-20'>
          <SeenOnCard
            title={"Others"}
            className={"gradient-seen-on-gray"}
            answerForOso={
              <div className='bg-black text-white p-4 rounded-[20px] mt-16 '>
                <p className='text-2xl font-medium h-[128px]   text-ellipsis overflow-auto'>
                  don&apos;t have access to real-time information or current
                  restaurant reviews, as my knowledge was last updated in
                  September 2021. However, I can suggest some popular sushi
                  places in Prague as of my last update
                </p>
              </div>
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SearchAndOtherForMobile
