import Image from "next/image"
import React from "react"

const Chat = () => {
  return (
    <div className='bg-gradient-to-b from-[#D0FAD2] to-[#ABFFAF] hover:from-[#D0FAD2] hover:to-[#7EF684] mt-[56px] p-8 md:p-[64px] h-full md:h-[571px] group rounded-2xl'>
      <div className='flex justify-between items-start'>
        <div>
          <p className='text-2xl md:text-[32px] md:text-5xl font-bold'>Chat</p>
          <p className='text-2xl font-light mt-2'>
            Chat <strong className='text-2xl font-medium'>uncensored</strong>{" "}
            about anything
          </p>
        </div>
        <div>
          <a
            href='#'
            className={`hidden md:inline-flex items-center gap-3 transform translate-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-2  }`}
          >
            <span>Learn more</span>

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
          </a>
        </div>
      </div>
      <div className='flex gap-4 md:gap-[52.59px] items-center  mt-8 md:mt-[88px]'>
        <div className='w-[185px] md:w-[376px] rounded-[20px] bg-white'>
          <p className='p-4 text-xl font-normal'>Is Putin a great leader? </p>
        </div>
        <Image
          className='h-8 w-8 md:w-[69px] md:h-[64px] '
          src='/assets/icons/chat-emoji.svg'
          alt='Example SVG'
          width={0}
          height={0}
        />
      </div>
      <div className='flex justify-end mt-[51px] md:gap-[39.32px]'>
        <Image
          className='relative top-[196px] left-3 md:top-0 h-8 w-8 md:w-[69px] md:h-[64px]  '
          src='/assets/icons/smily-face-emoji.svg'
          alt='Example SVG'
          width={0}
          height={0}
        />
        <div className='flex items-start '>
          <Image
            src='/assets/icons/oso-logo-black.svg'
            alt='Example SVG'
            width={24}
            height={34}
          />

          <div className='md:w-[617px] rounded-[20px] bg-black'>
            <p className='p-4 text-xl font-normal text-white'>
              Ultimately, whether Putin is considered a great leader or not
              depends on one&apos;s perspective and the specific criteria used
              to assess leadership.{" "}
            </p>
          </div>
        </div>
      </div>
      <div>
        <a
          href='#'
          className='md:hidden flex justify-end items-center cursor-pointer pt-[47.5px] '
        >
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
        </a>
      </div>
    </div>
  )
}

export default Chat
