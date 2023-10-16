"use client"
import React, { useEffect, useRef, useState } from "react"
import AdvantageCard from "@/components/advantages/AdvantageCard"
import Advantages from "@/components/advantages/Index"
import Banner from "@/components/common/banner/Index"
import Testimonials from "@/components/testimonials/Index"
import webImage from "../../../public/assets/images/updated.png"
import SecondPhone from "../../../public/assets/images/mobilephone.png"
import PhoneUncensored from "../../../public/assets/images/chat-uncensored.png"
import PhoneUnbiased from "../../../public/assets/images/chat-unbiased.png"
import PhonePersonalized from "../../../public/assets/images/chat-personlized.png"

import FAQ from "@/components/FAQ/Index"
import InnerSections from "@/components/common/Comparisons/InnerSections/InnerSections"
import Comparisons from "@/components/common/Comparisons/Comparisons"

const ChatView = () => {
  return (
    <>
      <Banner
        title='Uncensored, intelligent <br /> AI Chat'
        description='OSO Chat sets a new standard for AI chatbots.'
      />

      <Testimonials />
      <Advantages title='Advantages of OSO Chat'>
        <AdvantageCard
          title='Uncensored'
          description=" OSO believes in free speech and  <span class='font-medium'>unrestricted access to knowledge,</span> ensuring you receive in-depth and unfiltered answers."
          borderLess={false}
          image={PhoneUncensored}
          imageWidth='357'
          imageHeight='507'
          color='light-green-adv'
        />

        <AdvantageCard
          title='Unbiased'
          description="OSO believes in <span class='font-medium'>allowing you to formulate your own opinions</span> and  and provides different viewpoints of sensitive topics."
          borderLess={false}
          image={PhoneUnbiased}
          imageWidth='357'
          imageHeight='507'
          color='medium-green-adv'
        />

        <AdvantageCard
          title='Personalized'
          description="OSO <span class='font-medium'> learns from your preferences</span> over time to give you answers in the format, tone, and style that suites you best."
          borderLess={false}
          image={PhonePersonalized}
          imageWidth='357'
          imageHeight='507'
          color='green-adv'
        />
      </Advantages>

      <Comparisons title={"How OSO Chat transforms AI"}>
        <InnerSections
          titleOne={"Customizable"}
          descriptionOne={
            "Unlike other AI Chats, OSO enables you to select the AI model that suites you best."
          }
          titleTwo={"Visually-appealing"}
          descriptionTwo={
            "View answers in bite-sized chunks with beautifully crafted visuals to make digesting information easy."
          }
          titleThree={"Intelligent"}
          descriptionThree={
            "Trained until Sept. 2023 and continuously learning."
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
