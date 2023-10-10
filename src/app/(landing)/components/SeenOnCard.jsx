import React from "react"
import Typewriter from "typewriter-effect"
export const SeenOnCard = ({ className, learnMore }) => {
  return (
    <div className={`${className} w-[532px] h-[571px] px-16 rounded-2xl`}>
      <h2 className='text-[32px] mt-16 '>OSO Search</h2>
      <p className='text-2xl font-light'>
        Delivers a{" "}
        <strong className='text-2xl font-medium'>comprehensive result.</strong>
      </p>
      <div className='text-[40px] font-normal mt-16 h-[250px]'>
        <Typewriter
          options={{
            strings: ["Where is the best sushi restaurant in Prague? 🍣"],
            autoStart: false,
            loop: false,
            deleteSpeed: 0,
          }}
        />
      </div>
      {learnMore}
    </div>
  )
}
