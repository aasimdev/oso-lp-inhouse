import React from "react"
import Typewriter from "typewriter-effect"
export const SeenOnCard = ({ className }) => {
  return (
    <div className={`${className} w-[532px] h-[571px] px-16`}>
      <h2 className='text-[32px] mt-16 '>OSO Search</h2>
      <p className='text-2xl font-light'>
        Delivers a{" "}
        <strong className='text-2xl font-medium'>comprehensive result.</strong>
      </p>
      <div className='text-[40px] font-normal mt-16 h-[250px]'>
        <Typewriter
          options={{
            strings: ["Where is the best sushi restaurant in Prague? 🍣"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
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
    </div>
  )
}
