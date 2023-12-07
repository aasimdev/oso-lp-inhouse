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
import OSOUseCaseLanding from "@/components/landingPage/OSOUseCaseLanding";

const SearchView = () => {
  const accordionData = [
    {
      id: 1,
      question: "Benefits of OSO Search?",
      answer: `<ul class="list-disc p-[revert] space-y-6">

        <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal"> Save Time:</span> OSO significantly reduces the time you spend
jumping between websites. Spend more time doing what you love and let OSO research it for you.</li>

        <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Stay Informed:</span> OSO provides you with the latest information from reliable sources, ensuring you always stay updated.</li>

        <li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Learn Faster:</span> OSO's visually engaging format and quick summaries empower you to learn and absorb information more efficiently.</li>
        </ul>`,
    },
    {
      id: 2,
      question: "How is OSO Search better than traditional search engines?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Search revolutionizes the way you find information compared
to traditional search engines. By harnessing the power of advanced AI technology and multiple search engines, OSO can provide you with the latest and most comprehensive information on any topic.</p>`,
    },
    {
      id: 3,
      question: "What is the pricing?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Search is free to use with daily usage limitations. If you want to unlock the full power of OSO, it only costs $20/mo and will provide great value in productivity and time-savings.</p>`,
    },
     {
      id: 4,
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
      id: 5,
      question: "How do I get started?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO currently has a huge demand from people across the world, and we are letting in users from the waitlist as quickly as possible. Once you gain access, you can use OSO from Web, Android, and iOS.</p>`,
    },
  ];
  return (
    <>
      <Banner
        title="Experience the Future of Search"
        description="Find what you’re looking for faster by letting OSO do the searching for you."
        videoId="7y2r9MrUeQ8"
        checklist={['Uncensored', 'Up-to-date', 'Unbiased']}
      />
      <OSOUseCaseLanding type="search" />
      {/* <Testimonials /> */}

      <Advantages title="Advantages of OSO Search">
        <AdvantageCard
          title="Up to Date"
          description="Unlike AI chatbots that have a set knowledge cutoff, <span class='font-medium'>OSO’s AI Search Engine ensures you receive the most recent</span> and relevant information."
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
