import React, { useState } from "react"
import Typewriter from "typewriter-effect"
export const SeenOnCard = ({ className, learnMore, title, answerForOso, bgColor }) => {
  const [stringTypeOut, setStringTypeOut] = useState(false)

  return (
    <div
      className={`${className} w-full md:w-[532px]   px-8 lg:px-14 rounded-2xl`}
    >
      <h2 className='text-[32px] pt-16 font-semibold lg:px-2' >{title}</h2>
      <p className='text-2xl font-light lg:px-2' >
        Delivers a{" "}
        <strong className='text-2xl font-medium '>comprehensive result.</strong>
      </p>
      {stringTypeOut ? (
        answerForOso
      ) : (
        <div
          className={`text-[40px] h-[216px] font-normal mt-12 md:mt-16  rounded-[20px] p-4 `}
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
      <div className='flex justify-end pb-[38px] mt-12'>{learnMore}</div>
    </div>
  )
}
