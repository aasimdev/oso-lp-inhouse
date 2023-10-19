"use client";
import AdvantageCard from "@/components/advantages/AdvantageCard";
import Advantages from "@/components/advantages/Index";
import Banner from "@/components/common/banner/Index";
import Testimonials from "@/components/testimonials/Index";
import React from "react";

import webImage from "../../../public/assets/images/updated.png";
import SecondPhone from "../../../public/assets/images/mobilephone.png";
import UpdatePhone from "../../../public/assets/images/updatePhones.png";
import UpdatePhone2 from "../../../public/assets/images/updatephone-2.png";

import FAQ from "@/components/FAQ/Index";
import Comparisons from "@/components/common/Comparisons/Comparisons";
import InnerChatSection from "@/components/common/Comparisons/InnerChatSection/InnerChatSection";
import GoogleAnalytics from "@/utils/google-analytics/anaylics";

const NewsView = () => {
  const accordionData = [
    {
      id: 1,
      question: "Benefits of OSO News",
      answer: `<ul class="list-disc p-[revert] space-y-6">

        <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Enhanced Results:</span> OSO's advanced AI Search provides more accurate and relevant search outcomes.</li>

        <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Up to date & un-biased:</span> Find the information you need without the censorship or limitations of other AI platforms.</li>

        <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Boosted Productivity:</span> OSO does the time consuming and often boring tasks, such as reading through websites to find small bits of information you actually need, freeing you to concentrate on tasks that leverage unique human skills and creativity.</li>
        </ul>`,
    },
    {
      id: 2,
      question: "Which news sources are supported?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">While most AI applications rely on ChatGPT or existing AI solutions that have severe limitations, OSO has created its own AI technology that provides a more robust and useful user experience.</p>`,
    },
    {
      id: 3,
      question: "What is the Pricing?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">You can use OSO Free forever with certain usage limitations such as 50 searches and chats per day. If you want to unlock the full power of OSO, it only costs $20/mo and will return 100x the value in productivity and time-savings.</p>`,
    },

    {
      id: 4,
      question: "How can I request new categories?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO currently has a huge demand from people across the world, and we are letting in users from the waitlist as quickly as possible. Once you gain access, you can use OSO from Web, Android, and iOS.</p>`,
    },

    {
      id: 5,
      question: "How do I get started?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO currently has a huge demand from people across the world, and we are letting in users from the waitlist as quickly as possible. Once you gain access, you can use OSO from Web, Android, and iOS.</p>`,
    },
  ];
  const comparisonContent = [
    {
      title: "AI-Powered Summaries",
      description:
        "Saving you time by pulling the most important information from the article.",
      image: "123123",
      id: "stay",
    },
    {
      title: "Chat with your personal AI News Reporter",
      description:
        "Find the specific information you're looking for by asking OSO. ",
      image: "456456",
      id: "plan",
    },
  ];

  return (
    <>
      <GoogleAnalytics gaTrackingID="G-M7WJFKYHCL" />
      <Banner
        title="Stay informed effortlessly with OSO's Interactive AI News"
        description="OSO transforms how you consume the news with AI-powered summaries and interactive chat."
        page="news"
        videoId="gAfKNS92eYM"
      />

      {/* <Testimonials  /> */}

      <Advantages title="Advantages of OSO News" page="news">
        <AdvantageCard
          title="Interactive"
          description="Skip reading through articles; <span class='font-medium'>just ask questions</span> to get the information you need."
          borderLess={false}
          image={UpdatePhone}
          // image2={SecondPhone}
          imageWidth="357"
          imageHeight="507"
          color="egg-blue"
        />
        <AdvantageCard
          title="Personalized"
          description="Receive daily news headlines <span class='font-medium'>tailored to your specific interests.</span>"
          borderLess={false}
          image={UpdatePhone2}
          // image2={SecondPhone}
          imageWidth="357"
          imageHeight="507"
          color="electric-blue"
        />
        <AdvantageCard
          title="Always up-to-date"
          description="OSO <span class='font-medium'>continuously scans the internet for the latest developments</span> to keep you updated on news as it breaks."
          borderLess={false}
          image={UpdatePhone2}
          imageWidth="357"
          imageHeight="507"
          color="vivid-blue"
        />
      </Advantages>

      <Comparisons
        title={"How OSO is transforming the way people consume the News"}
      >
        <InnerChatSection comparisonContent={comparisonContent} />
      </Comparisons>
      <Testimonials title="Testimonials" />
      <FAQ accordionData={accordionData} />
    </>
  );
};

export default NewsView;
