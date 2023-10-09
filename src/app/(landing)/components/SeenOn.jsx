import React from "react"
import Hero from "./Hero"
import { SeenOnCard } from "./SeenOnCard"

function SeenOn({}) {
  return (
    <div className='px-6 mx-auto max-w-6xl'>
      <Hero />
      <div className='md:text-center text-left mb-16 px-6 mx-auto max-w-6xl'>
        <h2 className='text-[40px] leading-tight md:text-5xl md:leading-relaxed font-bold text-black'>
          As Seen on
        </h2>
      </div>
      <div className='flex flex-row justify-between'>
        <SeenOnCard color={"#77B9AF"} />
        <SeenOnCard color={"#DEDEDE"} />
      </div>
      {/* chat */}
      <div className='bg-[#77B9AF] mt-[56px] p-[64px]'>
        <p className='text-5xl font-bold'>Chat</p>
        <p className='text-2xl font-light'>
          Chat
          <strong className='text-2xl font-medium'>uncensored</strong>
          about anything
        </p>
      </div>
    </div>
  )
}

export default SeenOn
