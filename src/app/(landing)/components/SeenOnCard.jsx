import React, { useState } from "react"
import Typewriter from "typewriter-effect"
export const SeenOnCard = ({ className, learnMore, title, answerForOso, bgColor }) => {
  const [stringTypeOut, setStringTypeOut] = useState(false)

  return (
    <div
      className={`${bgColor} w-full px-8 lg:p-16 rounded-2xl group relative overflow-hidden`}
    >
      <div className="bg-gradient-to-b absolute left-0 top-0 right-0 bottom-0 w-full h-full" />
      <div className="relative z-10">
        <h2 className='text-[32px] font-semibold'>{title}</h2>
        <p className='text-2xl font-light'>
          Delivers a{" "}
          <strong className='text-2xl font-medium'>comprehensive result.</strong>
        </p>
        {stringTypeOut ? (
          answerForOso
        ) : (
          <div
            className={`text-[40px] h-[216px] font-normal mt-12 md:mt-16  rounded-[20px] p-4 ${stringTypeOut ? "bg-black" : "default"
              } ${stringTypeOut ? "text-white" : "default"}`}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Where is the best sushi restaurant in Prague? 🍣")
                  .callFunction(() => {
                    setStringTypeOut(true)
                  })
                  .start()
              }}
            />
          </div>
        )}

        {learnMore &&
          <a className='flex justify-end items-center mt-12 transform translate-x-0 transition-transform duration-100 ease-in-out group-hover:translate-x-2' href="#">
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
        }
      </div>
    </div>
  )
}
