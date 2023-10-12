import React, { useState } from "react"
import Typewriter from "typewriter-effect"
export const SeenOnCard = ({ className, learnMore, title, answerForOso }) => {
  const [stringTypeOut, setStringTypeOut] = useState(false)

  return (
    <div
      className={`${className} w-full md:w-[532px]   px-8 lg:px-16 rounded-2xl`}
    >
      <h2 className='text-[32px] pt-16 font-semibold'>{title}</h2>
      <p className='text-2xl font-light'>
        Delivers a{" "}
        <strong className='text-2xl font-medium'>comprehensive result.</strong>
      </p>
      {stringTypeOut ? (
        answerForOso
      ) : (
        <div
          className={`text-[40px] h-[216px] font-normal mt-12 md:mt-16  rounded-[20px] p-4 ${
            stringTypeOut ? "bg-black" : "default"
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
      <div className='flex justify-end  items-center pb-[38px] mt-12 transform translate-x-0 transition-transform duration-100 ease-in-out hover:translate-x-2'>
        {learnMore}
      </div>
    </div>
  )
}
