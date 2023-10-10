import React, { useState } from "react"
import Typewriter from "typewriter-effect"
export const SeenOnCard = ({ className, learnMore }) => {
  const [stringTypeOut, setStringTypeOut] = useState(false)

  return (
    <div
      className={`${className} w-full md:w-[532px] h-[571px] px-8 lg:px-16 rounded-2xl`}
    >
      <h2 className='text-[32px] pt-16 font-semibold'>OSO Search</h2>
      <p className='text-2xl font-light'>
        Delivers a{" "}
        <strong className='text-2xl font-medium'>comprehensive result.</strong>
      </p>
      <div
        className={`text-[40px] font-normal mt-12 md:mt-16  rounded-[20px] p-4 ${
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
      {learnMore}
    </div>
  )
}
