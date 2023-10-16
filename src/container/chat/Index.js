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
  const accordionData = [
    {
      id: 1,
      question: "Benefits of OSO?",
      answer: `<ul class="list-disc p-[revert] space-y-6">

        <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Enhanced Results:</span> OSO's advanced AI Search provides more accurate and relevant search outcomes.</li>

        <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Up to date & un-biased:</span> Find the information you need without the censorship or limitations of other AI platforms.</li>

        <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Boosted Productivity:</span> OSO does the time consuming and often boring tasks, such as reading through websites to find small bits of information you actually need, freeing you to concentrate on tasks that leverage unique human skills and creativity.</li>
        </ul>`
    },
    {
      id: 2,
      question: "Why should I choose OSO?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">While most AI applications rely on ChatGPT or existing AI solutions that have severe limitations, OSO has created its own AI technology that provides a more robust and useful user experience.</p>`
    },
    {
      id: 3,
      question: "How is it different than other AI?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">You can use OSO Free forever with certain usage limitations such as 50 searches and chats per day. If you want to unlock the full power of OSO, it only costs $20/mo and will return 100x the value in productivity and time-savings.</p>`
    },

    {
      id: 4,
      question: "How Does OSO's AI Differ From Others?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO currently has a huge demand from people across the world, and we are letting in users from the waitlist as quickly as possible. Once you gain access, you can use OSO from Web, Android, and iOS.</p>`
    },
    {
      id: 5,
      question: "What is pricing?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO currently has a huge demand from people across the world, and we are letting in users from the waitlist as quickly as possible. Once you gain access, you can use OSO from Web, Android, and iOS.</p>`
    },
    {
      id: 6,
      question: "On which platforms can I access OSO?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO currently has a huge demand from people across the world, and we are letting in users from the waitlist as quickly as possible. Once you gain access, you can use OSO from Web, Android, and iOS.</p>`
    }

  ];
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

      <FAQ accordionData={accordionData} />
    </>
  )
}

export default ChatView
