"use client";

import React from "react";
import ExploreUsecases from "@/components/resources/ExploreUsecases";
import OSOWork from "@/components/resources/OSOWork";
import TopThreeUsecase from "@/components/resources/TopThreeUsecase";
import CreativeUsecase from "@/components/resources/CreativeUsecase";
import BenefitFromOSO from "@/components/resources/BenefitFromOSO";
import FAQ from "@/components/FAQ/Index";

// import PIC2 from "../../../public/assets/newpage/Image2.png";
// import PIC3 from "../../../public/assets/newpage/Image3.png";
// import PIC4 from "../../../public/assets/newpage/Image4.png";
// import PIC5 from "../../../public/assets/newpage/Image5.png";
// import PIC6 from "../../../public/assets/newpage/Image6.png";
// import CARD1 from "../../../public/assets/card-image/Image1.png"

const accordionData = [
  {
    id: 1,
    question: "Benefits of OSO?",
    answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO introduces an entirely new way to engage with the internet. Packed with three powerful tools – OSO Search, OSO Chat, and OSO News – you can access a wide range of information and engage in conversations without sifting through countless websites and articles. 
    <br /><br />
    OSO saves you time and offers an entirely new interactive experience, as easy as chatting with a friend. Unlike many competitors whose data is limited to 2021, OSO employs cutting-edge models, ensuring you always have up-to-date, uncensored information.</p>`,
  },
  {
    id: 2,
    question: "Why should I choose OSO?",
    answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Search is your go-to tool for quick, comprehensive answers. OSO reads through the entire internet to find the latest information and delivers you with results in a visually appealing format. It's your personal research assistant, providing you with real-time, unbiased insights. 
  <br /><br />
OSO Chat, on the other hand, is your conversational companion. It engages in interactive, text-based conversations with you. Unlike other chatbots whose data is limited to 2021, OSO Chat was trained up to September 2023 and continuously learns as more questions are asked. Whether you're looking for a friendly chat or need information presented in a conversational format, OSO Chat is your companion of choice.
  <br /><br />
Together, OSO Search and OSO Chat form a powerful combo, quickly giving you the information you need, in the way that suits you best.</p>`,
  },
  {
    id: 3,
    question: "How is it different than other AI?",
    answer: `<p class="text-2xl leading-9 font-light text-gray-900">At OSO, we're all about unrestricted and open access to knowledge. With OSO Chat, we've removed many of the censorship constraints you might encounter on other AI platforms. Our own uncensored LLM enables OSO Chat to provide users with useful, straightforward answers.
<br /><br />
When we say "unbiased," we mean we train OSO models to take a neutral stance, free from political or popular opinion. We believe in empowering users to form their own conclusions on complex subjects by presenting information objectively.</p>`,
  },
  {
    id: 4,
    question: "How Does OSO's AI Differ From Others?",
    answer: `<p class="text-2xl leading-9 font-light text-gray-900">At OSO, we take our commitment to responsible information use seriously. While we provide uncensored and unbiased access to information, we strongly emphasize that our platform is designed for responsible, legal, and ethical purposes. We do not endorse or support any illegal, harmful, or unethical activities.
<br /><br />
To ensure responsible use, OSO will require all users to complete a consent form upon joining. This consent form will include a legal disclaimer outlining our guidelines for appropriate use. Additionally, OSO is designed for adult users, and we do not permit access to individuals who are not of legal age in their jurisdiction.
<br /><br />
Our mission is to empower users with information while promoting ethical conduct and respect for the law. We encourage all OSO users to utilize our platform responsibly and in a manner that upholds these principles.</p>`,
  },

  {
    id: 5,
    question: "What is pricing?",
    answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO is free to use with certain usage limitations. If you want to unlock the full power of OSO, it only costs $20/mo and will provide great value in productivity and time-savings.</p>`,
  },
  {
    id: 6,
    question: "On which platforms can I access OSO?",
    answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Ambassadors earn $5 per month when anyone they invite to OSO subscribes to OSO Pro. If 100 people they invite have active OSO Pro subscriptions, they would earn $500 every month. 
    <br /><br />
    Ambassadors can start inviting people right now, and start earning straight away when OSO launches.
     <br /><br />
     <a href="https://friends.oso.ai/signup" target="_blank" rel="noopener noreferrer">
<span><strong>Apply here</strong></span>
</a>

     </p>`,
  },
];

const Resources = () => {
  const handleClick = () => {};
  return (
    <>
      <section className="sm:mt-8 py-6 sm:py-8 px-6 mx-auto max-w-6xl">
        <div className="flex flex-col md:gap-4 gap-2">
          <h1 className="md:text-[56px] text-[40px] md:text-center text-left font-extrabold leading-[56px] md:leading-[80px] text-black max-w-4xl mx-auto">
            How people are using OSO
          </h1>
          <p className="text-gray-800 md:text-center text-left md:text-[32px] text-2xl font-light leading-tight">
            Watch tips and tricks that help you level up your use of OSO.
          </p>
        </div>
        <div className="flex justify-center items-center py-6 md:py-8 mt-4 w-full">
          <button
            className="bg-purple text-white text-2xl font-normal px-14 h-[74px] rounded-lg justify-center items-center flex gap-2"
            onClick={handleClick}
          >
            Try Using OSO
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </section>
      <ExploreUsecases />

      <OSOWork />

      <TopThreeUsecase />

      <CreativeUsecase />

      <BenefitFromOSO />

      <FAQ accordionData={accordionData} />
    </>
  );
};

export default Resources;
