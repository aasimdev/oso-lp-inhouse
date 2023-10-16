"use client"
import React, { useEffect, useRef, useState } from "react"
import AdvantageCard from "@/components/advantages/AdvantageCard"
import Advantages from "@/components/advantages/Index"
import Banner from "@/components/common/banner/Index"
import Testimonials from "@/components/testimonials/Index"
import webImage from "../../../public/assets/images/updated.png"
import SecondPhone from "../../../public/assets/images/mobilephone.png"
import UpdatePhone from "../../../public/assets/images/updatePhones.png"
import UpdatePhone2 from "../../../public/assets/images/updatephone-2.png"

import FAQ from "@/components/FAQ/Index"
import InnerSections from "@/components/common/Comparisons/InnerSections/InnerSections"
import Comparisons from "@/components/common/Comparisons/Comparisons"

const ChatView = () => {
  return (
    <>
      <Banner
        title='Uncensored, intelligent AI Chat'
        description='OSO Chat sets a new standard for AI chatbots.'
      />

      <Testimonials />
      <Advantages title='Advantages of OSO Chat'>
        <AdvantageCard
          title='Uncensored'
          description=" OSO believes in free speech and  <span class='font-medium'>unrestricted access to knowledge,</span> ensuring you receive in-depth and unfiltered answers."
          borderLess={true}
          image={webImage}
          imageWidth='532'
          className='absolute'
          imageHeight='427'
          color='egg-blue'
        />

        <AdvantageCard
          title='Unbiased'
          description="OSO believes in <span class='font-medium'>allowing you to formulate your own opinions</span> and  and provides different viewpoints of sensitive topics."
          borderLess={false}
          image={UpdatePhone}
          image2={SecondPhone}
          imageWidth='357'
          imageHeight='507'
          color='electric-blue'
        />

        <AdvantageCard
          title='Personalized'
          description="OSO <span class='font-medium'> learns from your preferences</span> over time to give you answers in the format, tone, and style that suites you best."
          borderLess={false}
          image={UpdatePhone2}
          imageWidth='357'
          imageHeight='507'
          color='vivid-blue'
        />
      </Advantages>

      <Comparisons title={"How OSO Chat transforms AI"}>
        <InnerSections
          titleOne={"Stay Updated"}
          descriptionOne={
            "Get instant news updates like the recent Maui Fires. Watch OSO gather real-time information from diverse sources."
          }
          titleTwo={"Plan Your Events"}
          descriptionTwo={
            "Wondering about the Grand Prix in Las Vegas? From dates to ticket pricing and seat recommendations, see OSO fetch it all."
          }
          titleThree={"Deep Dive Reviews"}
          descriptionThree={
            "Looking for the best restaurant experience? Observe how OSO evaluates atmosphere, culinary highlights, and more"
          }
          oso='OSO'
          chatgpt='ChatGPT'
          phoneoneOso={"869795820"}
          phoneOneChatGPT={"869795832"}
          phoneTwoOso={"869795741"}
          phoneTwoChatGPT={"869795758"}
          phoneThreeOso={"869795782"}
          phoneThreeChatGPT={"869795803"}
        />
      </Comparisons>
      <FAQ />
    </>
  )
}

export default ChatView
