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
import InnerChatSection from "@/components/common/Comparisons/InnerChatSection/InnerChatSection"
import Comparisons from "@/components/common/Comparisons/Comparisons"
import GoogleAnalytics from "@/utils/google-analytics/anaylics"
import OSOUseCaseLanding from "@/components/landingPage/OSOUseCaseLanding"

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
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Chat stands out from other AI chatbots in several ways, primarily due to its uncensored and unbiased language models. Here's what makes OSO Chat unique:</p>

            <ul class="list-disc p-[revert] space-y-6 mt-6">

            <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Uncensored Responses:</span> Unlike many AI chatbots, OSO Chat provides uncensored responses, allowing you to receive information without unnecessary filters. This transparency promotes open dialogue and unrestricted access to knowledge, empowering users to engage in meaningful conversations and explore a wide range of topics without limitations.</li>

            <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Unbiased Language Models:</span> OSO Chat is designed to avoid biases and present information in a fair and unbiased manner. This ensures that users can trust the integrity of the responses they receive, making OSO Chat a reliable and trustworthy source of information.

                  <br /><br />

            By offering uncensored and unbiased language models, OSO Chat enables users to engage in discussions openly and access information without limitations or biases.</li>

            </ul>`
    },
    {
      id: 3,
      question: "What language models does OSO Chat support?",
      answer: `
      
      <p class="text-2xl leading-9 font-light text-gray-900 mt-6">
      OSO supports a custom-tuned model based on Mistral 7B with a modified dataset for uncensoring, deduping, cleaning, and quality, as well as to increase creativity and overall empathy. We are continually improving this model to provide better results for our users.
      <br/><br/>
      The OSO team is also working on new models that specialize in areas such as <strong class=" text-gray-900">
      coding assistants, data curation, image generation, and improving our aggregation of web resources.

      </strong>
      </p>
      `,
    },

    {
      id: 4,
      question: "What is OSO Savant?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Savant is a specialized framework within OSO Chat that focuses on specific functions. Instead of having broad language models for all tasks, OSO Savant gives users access to highly specialized AI agents designed for specific niches. This unique feature enables you to obtain more precise and focused responses tailored to meet specific requirements. With OSO Savant, you can easily switch between these specialized AI agents, ensuring that you can access the information you need with the assistance of experts in their respective fields.</p>`,
    },
    {
      id: 5,
      question: "Commitment to Encouraging Responsible Use of Information",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">At OSO, we take our commitment to responsible information use seriously. While we provide uncensored and unbiased access to information, we strongly emphasize that our platform is designed for responsible, legal, and ethical purposes. We do not endorse or support any illegal, harmful, or unethical activities.
<br /><br />
To ensure responsible use, OSO will require all users to complete a consent form upon joining. This consent form will include a legal disclaimer outlining our guidelines for appropriate use. Additionally, OSO is designed for adult users, and we do not permit access to individuals who are not of legal age in their jurisdiction.
<br /><br />
Our mission is to empower users with information while promoting ethical conduct and respect for the law. We encourage all OSO users to utilize our platform responsibly and in a manner that upholds these principles.</p>`,
    },
    {
      id: 6,
      question: "How does OSO Uncensored Chat work?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">Our most advanced and Uncensored LLM, affectionately known as OSO Pro, is like having a super knowledgeable and refreshingly honest best friend on speed dial. By upgrading to OSO Pro and enabling Uncensored Chat, you can expect more balanced and unbiased responses.
      <br /><br />
      That being said, the onus is on users to make responsible use of the information that is provided. OSO doesn't promote or condone the use of our platform for illegal or unethical activities. While we're committed to transparency and sharing accurate, unbiased information, we expect our users to make informed decisions and use our services responsibly.
      </p>`,
    },
    {
      id: 7,
      question: "What is the pricing?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Chat is free to use with daily usage limitations. To unlock unlimited chats and certain language models, an OSO Pro subscription for $20/mo is required.</p>`,
    },
     {
      id: 8,
      question: "What are the perks of being an OSO Ambassador?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Ambassadors earn $5 per month when anyone they invite to OSO subscribes to OSO Pro. If 100 people they invite have active OSO Pro subscriptions, they would earn $500 every month. 
      <br /><br />
      Ambassadors can start inviting people right now, and start earning straight away when OSO launches.
       <br /><br />
       <a href="https://friends.oso.ai/signup" target="_blank" rel="noopener noreferrer">
  <span><strong>Apply here</strong></span>
</a>

       </p>`,
    },
    {
      id: 9,
      question: "How do I get started?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO currently has a huge demand from people across the world, and we are letting in users from the waitlist as quickly as possible. Once you gain access, you can use OSO from Web, Android, and iOS.</p>`,
    },
  ]
  const comparisonContent = [
    {
      title: "Customizable",
      description:
        "Unlike other AI Chats, OSO enables you to select the AI model that suits you best. ",
      image: "chatphone-1",
      id: "stay",
    },
    {
      title: "Visually-appealing",
      description:
        "View answers in bite-sized chunks with beautifully crafted visuals to make digesting information easy. ",
      image: "chatphone-2",
      id: "plan",
    },
    {
      title: "Intelligent",
      description: "Trained until Sept. 2023 and continuously learning.",
      image: "chatphone-3",
      id: "deep",
    },
  ]
  return (
    <>
      <GoogleAnalytics gaTrackingID='G-WZHB0QP262' />
      <Banner
        title="Uncensored, Unbiased, Intelligent"
        description="OSO Chat enables users to chat about any topic without restriction."
        videoId='FpWF0i0vxGs'
        checklist={['Uncensored', 'Visually-appealing', '7-Day Free Trial']}
      />
      <OSOUseCaseLanding type="chat" />
      {/* <Testimonials /> */}
      <Advantages
        title='Advantages of OSO Chat'
        description={
          "OSO Chat offers several AI language models to choose from including an uncensored version, enabling users to chat about any topic without restriction."
        }
      >
        <AdvantageCard
          title='Uncensored'
          description=" OSO values free speech and  <span class='font-medium'>unrestricted access to knowledge,</span> ensuring you receive in-depth and unfiltered answers."
          borderLess={false}
          image={PhoneUncensored}
          imageWidth='357'
          imageHeight='507'
          color='light-green-adv'
        />

        <AdvantageCard
          title='Unbiased'
          description="OSO believes in <span class='font-medium'>allowing you to formulate your own opinions</span> and provides different viewpoints on sensitive topics."
          borderLess={false}
          image={PhoneUnbiased}
          imageWidth='357'
          imageHeight='507'
          color='medium-green-adv'
        />

        <AdvantageCard
          title='Personalized'
          description="OSO <span class='font-medium'> learns from your preferences</span> over time to give you answers in the format, tone, and style that suits you best."
          borderLess={false}
          image={PhonePersonalized}
          imageWidth='357'
          imageHeight='507'
          color='green-adv'
        />
      </Advantages>

      <Comparisons title={"How OSO Chat transforms AI"}>
        <InnerChatSection comparisonContent={comparisonContent} />
      </Comparisons>

      <FAQ accordionData={accordionData} />
    </>
  )
}

export default ChatView
