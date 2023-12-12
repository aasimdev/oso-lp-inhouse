"use client";
import AdvantageCard from "@/components/advantages/AdvantageCard";
import Advantages from "@/components/advantages/Index";
import Banner from "@/components/common/banner/Index";

import React from "react";

import FAQ from "@/components/FAQ/Index";
import Comparisons from "@/components/common/Comparisons/Comparisons";
import InnerChatSection from "@/components/common/Comparisons/InnerChatSection/InnerChatSection";
import GoogleAnalytics from "@/utils/google-analytics/anaylics";
import BrandLogos from "@/components/common/BrandLogos";
import NewsTestimonials from "@/components/testimonials/News";
import OSOUseCaseLanding from "@/components/landingPage/OSOUseCaseLanding";

const NewsView = () => {
  const accordionData = [
    {
      id: 1,
      question: "Benefits of OSO News",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">Save time with OSO's Interactive AI News by asking questions directly instead of reading through articles to find the information you need.</p>`,
    },
    {
      id: 2,
      question: "Which news sources are supported?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">Over 150,000 news sources are supported by OSO including major outlets such as Techcrunch, BBC, Yahoo! Finance, and countless others.</p>`,
    },
    {
      id: 3,
      question: "What is the pricing?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO is free for general use. For those who want to customize their news experience based on specific news outlets and topics, OSO costs $20/month.</p>`,
    },

    {
      id: 4,
      question: "How can I request new categories?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">Please submit feedback via the OSO mobile app to request an additional news source or category.</p>`,
    },
     {
      id: 5,
      question: "What are the perks of being an OSO Ambassador?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Ambassadors earn passive income each month when anyone they invite to OSO subscribes to OSO Pro.
       </p>`,
    },

    {
      id: 6,
      question: "How do I get started?",
        answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO is available on Android, iOS, and Web. You can access OSO AI by going to this <span><strong><a href="https://l.oso.ai/newuser" target="_blank">link<a/></strong></span> and completing a quick 2 minute survey.
      <br><br>
      An OSO Pro subscription is required to access all of the Pro features.  With OSO Pro, you get our most advanced Uncensored model with faster search results and unlimited Chats and Searches. </p>`,
    },
  ];
  const comparisonContent = [
    {
      title: "AI-Powered Summaries",
      description:
        "Saving you time by pulling the most important information from the article.",
      image: "newsphone-1",
      id: "stay",
    },
    {
      title: "Chat with your personal AI News Reporter",
      description:
        "Find the specific information you're looking for by asking OSO. ",
      image: "newsphone-2",
      id: "plan",
    },
  ];

  return (
    <>
      <GoogleAnalytics gaTrackingID="G-M7WJFKYHCL" />
      <Banner
        title="Stay informed effortlessly with OSO's Interactive AI News"
        description="OSO transforms how you consume the news with AI-powered summaries and interactive chat."
        videoId="gAfKNS92eYM"
        checklist={['Interactive', 'Up-to-date', 'Unbiased']}
      />

      <BrandLogos />
       <OSOUseCaseLanding type="news" />

      <Advantages title="Advantages of OSO News" page="news">
        <AdvantageCard
          title="Interactive"
          description="Skip reading lengthy articles - <span class='font-medium'>just ask OSO</span> to get the information you need."
          borderLess={false}
          image="/assets/images/newsphone1.png"
          imageWidth="357"
          imageHeight="507"
          color="light-yellow"
        />
        <AdvantageCard
          title="Personalized"
          description="Receive daily news headlines <span class='font-medium'>tailored to your specific interests.</span>"
          borderLess={false}
          image="/assets/images/newsphone2.png"
          imageWidth="357"
          imageHeight="507"
          color="medium-yellow"
        />
        <AdvantageCard
          title="Always up-to-date"
          description="OSO <span class='font-medium'>continuously scans the internet for the latest developments</span> to keep you updated on news as it breaks."
          borderLess={false}
          image="/assets/images/newsphone3.png"
          imageWidth="357"
          imageHeight="507"
          color="yellow"
        />

      </Advantages>


      <Comparisons
        title={"How OSO is transforming the way people consume the News"}
      >
        <InnerChatSection comparisonContent={comparisonContent} />
      </Comparisons>
      {/* <NewsTestimonials title="Testimonials" /> */}
   
      <FAQ accordionData={accordionData} />
    </>
  );
};

export default NewsView;
