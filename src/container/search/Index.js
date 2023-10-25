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
import InnerSections from "@/components/common/Comparisons/InnerSections/InnerSections";

const SearchView = () => {
  const accordionData = [
    {
      id: 1,
      question: "Benefits of OSO?",
      answer: `<ul class="list-disc p-[revert] space-y-6">

        <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Enhanced Results:</span> OSO's advanced AI Search provides more accurate and relevant search outcomes.</li>

        <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Up to date & un-biased:</span> Find the information you need without the censorship or limitations of other AI platforms.</li>

        <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Boosted Productivity:</span> OSO does the time consuming and often boring tasks, such as reading through websites to find small bits of information you actually need, freeing you to concentrate on tasks that leverage unique human skills and creativity.</li>
        </ul>`,
    },
    {
      id: 2,
      question: "How is OSO Search different from other AI",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">While most AI applications rely on ChatGPT or existing AI solutions that have severe limitations, OSO has created its own AI technology that provides a more robust and useful user experience.</p>`,
    },
    {
      id: 3,
      question: "What is the pricing?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Search is free to use with daily usage limitations. If you want to unlock the full power of OSO, it only costs $20/mo and will return 100x the value in productivity and time-savings.</p>`,
    },

    {
      id: 4,
      question: "How do I get started?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO currently has a huge demand from people across the world, and we are letting in users from the waitlist as quickly as possible. Once you gain access, you can use OSO from Web, Android, and iOS.</p>`,
    },
  ];
  return (
    <>
      <Banner
        title="Experience the Future of Search with OSO"
        description="Find what you’re looking for faster by letting OSO do the searching for you."
        videoId="7y2r9MrUeQ8"
        checklist={['Uncensored', 'Up-to-date', 'No credit card required']}
      />
      <Testimonials />

      <Advantages title="Advantages of OSO Search">
        <AdvantageCard
          title="Up to Date"
          description="Unlike AI chatbots that have a set knowledge cutoff, <span class='font-medium'>OSO’s AI Search ensures you receive the most recent</span> and relevant information."
          borderLess={true}
          image={webImage}
          imageWidth="532"
          className="absolute"
          imageHeight="427"
          color="egg-blue"
        />
        <AdvantageCard
          title="Uncensored"
          description="OSO believes in <span class='font-medium'>free speech</span> and <span class='font-medium'>unrestricted access to knowledge,</span> ensuring you receive in-depth and unfiltered answers."
          borderLess={false}
          image={UpdatePhone}
          image2={SecondPhone}
          imageWidth="357"
          imageHeight="507"
          color="electric-blue"
        />
        <AdvantageCard
          title="Secure"
          description="With OSO, there's <span class='font-medium'>no need to venture into potentially harmful sites</span> since the searching is done for you."
          borderLess={false}
          image={UpdatePhone2}
          imageWidth="357"
          imageHeight="507"
          color="vivid-blue"
        />
      </Advantages>
      <Comparisons title={"How people are using OSO Search"}>
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
          oso="OSO"
          chatgpt="ChatGPT"
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
  );
};

export default SearchView;
