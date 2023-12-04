"use client";

import React, { useState, useEffect } from "react";
import ExploreUsecases from "@/components/resources/ExploreUsecases";
import OSOWork from "@/components/resources/OSOWork";
import TopThreeUsecase from "@/components/resources/TopThreeUsecase";
import CreativeUsecase from "@/components/resources/CreativeUsecase";
import BenefitFromOSO from "@/components/resources/BenefitFromOSO";
import FAQ from "@/components/FAQ/Index";
import Link from "next/link";

const Resources = () => {
  const [isMobile, setIsMobile] = useState(false);
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=your_app_package_name";
  const handleClick = () => {};
  useEffect(() => {
    // Check if the user is on a mobile device
    const mobileView =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    if (mobileView) {
      setIsMobile(true);
    }

    // Your Play Store URL
  }, []);
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
      question: "How can I access OSO?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO AI is available as a Web application, and in the Apple iOS and Google Android app stores.  You can access the latest version of OSO AI from your computer or your mobile device through a single dynamic-link: https://l.oso.ai/prod
      <br/><br/>

      If you click on the link from your computer, you will be taken to the web app, and if you click on the link from your mobile device, it will take you to the correct app store. 
      
  
       </p>`,
    },
  ];
  return (
    <>
      <section className="px-6 mx-auto max-w-6xl pt-16">
        <div className="flex flex-col md:gap-4 gap-2 py-2 md:py-6 justify-center items-center">
          <h1 className="md:text-[64px] text-[40px] md:text-center text-left font-extrabold leading-[32px] md:leading-[80px] text-black mx-auto">
            Discover how people are using OSO
          </h1>
          <p className="text-gray-800 md:text-center md:text-[32px] text-2xl font-light leading-8 md:leading-10">
            Watch tips and tricks that help you level up your AI game with OSO.
          </p>
        </div>
        <div className="flex justify-center items-center py-6 md:py-8">
          <Link
            href="https://l.oso.ai/prod"
            className="tryOSOButton bg-purple text-white text-2xl font-normal rounded-lg"
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
          </Link>
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
