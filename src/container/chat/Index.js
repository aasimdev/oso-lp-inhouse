"use client";
import React, { useEffect, useRef, useState } from "react";
import AdvantageCard from "@/components/advantages/AdvantageCard";
import Advantages from "@/components/advantages/Index";
import Banner from "@/components/common/banner/Index";
import Testimonials from "@/components/testimonials/Index";
import webImage from "../../../public/assets/images/updated.png";
import SecondPhone from "../../../public/assets/images/mobilephone.png";
import PhoneUncensored from "../../../public/assets/images/chat-uncensored.png";
import PhoneUnbiased from "../../../public/assets/images/chat-unbiased.png";
import PhonePersonalized from "../../../public/assets/images/chat-personlized.png";

import FAQ from "@/components/FAQ/Index";
import InnerSections from "@/components/common/Comparisons/InnerSections/InnerSections";
import Comparisons from "@/components/common/Comparisons/Comparisons";

const ChatView = () => {
  const accordionData = [
    {
      id: 1,
      question: "Benefits of OSO Chat?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Chat offers multiple language models so users can choose the one that is best for their objective and delivers answers in a visually-appealing and easy to read format.</p>`,
    },
    {
      id: 2,
      question: "How is OSO Chat different than other AI chatbots?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Chat offers uncensored and unbiased language models that put it apart from any existing AI solution.</p>`,
    },
    {
      id: 3,
      question: "What Language Models does OSO Chat support?",
      answer: `
      <p class="text-2xl leading-9 font-light text-gray-900">Currently OSO supports 4 chat models including</p>
      <ul class="list-disc p-[revert] space-y-6 mt-6">

      <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">OSO Uncensored:</span> OSO's advanced AI Search provides more accurate and relevant search outcomes.</li>

      <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">OSO Savant:</span> Find the information you need without the censorship or limitations of other AI platforms.</li>
      </ul>
      <p class="text-2xl leading-9 font-light text-gray-900 mt-6">OSO also supports a modified version of GPT 3.5 Turbo and GPT 4 with a visually-appealing format.</p>
      `,
    },

    {
      id: 4,
      question: "What is OSO Savant?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Savant is a highly specific language model framework for specific functions. Instead of having broad language models for all tasks, OSO Savant enables users to switch between highly specialized AI agents for specific niches.</p>`,
    },
    {
      id: 5,
      question: "How does OSO Uncensored Chat work?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">Uncensored Chat can be viewed as taking the training wheels off of a traditional AI Chatbot to provide users with answers to nearly any question.</p>`,
    },
    {
      id: 6,
      question: "What is the Pricing?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Chat is free to use with daily usage limitations. To unlock unlimited chats and certain language models an OSO Pro subscription for $20/mo is required.</p>`,
    },
    {
      id: 7,
      question: "How do I get started?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO currently has a huge demand from people across the world, and we are letting in users from the waitlist as quickly as possible. Once you gain access, you can use OSO from Web, Android, and iOS.</p>`,
    },
  ];
  return (
    <>
      <Banner
        title="Uncensored, intelligent <br /> AI Chat"
        description="OSO Chat sets a new standard for AI chatbots."
      />

      <Testimonials />
      <Advantages title="Advantages of OSO Chat">
        <AdvantageCard
          title="Uncensored"
          description=" OSO believes in free speech and  <span class='font-medium'>unrestricted access to knowledge,</span> ensuring you receive in-depth and unfiltered answers."
          borderLess={false}
          image={PhoneUncensored}
          imageWidth="357"
          imageHeight="507"
          color="light-green-adv"
        />

        <AdvantageCard
          title="Unbiased"
          description="OSO believes in <span class='font-medium'>allowing you to formulate your own opinions</span> and  and provides different viewpoints of sensitive topics."
          borderLess={false}
          image={PhoneUnbiased}
          imageWidth="357"
          imageHeight="507"
          color="medium-green-adv"
        />

        <AdvantageCard
          title="Personalized"
          description="OSO <span class='font-medium'> learns from your preferences</span> over time to give you answers in the format, tone, and style that suites you best."
          borderLess={false}
          image={PhonePersonalized}
          imageWidth="357"
          imageHeight="507"
          color="green-adv"
        />
      </Advantages>

      <Comparisons title={"How OSO Chat transforms AI"}>
        <InnerSections
          titleOne={"Customizable"}
          descriptionOne={
            "Unlike other AI Chats, OSO enables you to select the AI model that suites you best. "
          }
          titleTwo={"Visually-appealing"}
          descriptionTwo={
            "View answers in bite-sized chunks with beautifully crafted visuals to make digesting information easy."
          }
          titleThree={"Intelligent"}
          descriptionThree={
            "Trained until Sept. 2023 and continuously learning."
          }
          // oso='OSO'
          // chatgpt='ChatGPT'
          phoneoneOso={"123123"}
          // phoneOneChatGPT={"869795832"}
          phoneTwoOso={"456456"}
          // phoneTwoChatGPT={"869795758"}
          phoneThreeOso={"789789"}
          // phoneThreeChatGPT={"869795803"}
        />
      </Comparisons>

      <FAQ accordionData={accordionData} />
    </>
  );
};

export default ChatView;
