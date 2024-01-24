"use client";
import AdvantageCard from "@/components/advantages/AdvantageCard";
import Advantages from "@/components/advantages/Index";
import Banner from "@/components/common/banner/Index";
// import Testimonials from "@/components/testimonials/Index";
import PhoneUncensored from "../../../public/assets/images/chat-uncensored.png";
import PhoneUnbiased from "../../../public/assets/images/chat-unbiased.png";
import PhonePersonalized from "../../../public/assets/images/chat-personlized.png";

import FAQ from "@/components/FAQ/Index";
import InnerChatSection from "@/components/common/Comparisons/InnerChatSection/InnerChatSection";
import Comparisons from "@/components/common/Comparisons/Comparisons";
import GoogleAnalytics from "@/utils/google-analytics/anaylics";
import OSOUseCaseLanding from "@/components/landingPage/OSOUseCaseLanding";
import { useMediaQuery } from "react-responsive";

const ChatView = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" });

  const accordionData = [
    {
      id: 1,
      question: "Benefits of OSO Chat?",
      answer:
        '<p class="text-2xl leading-9 font-light text-gray-900">OSO Chat offers two language models so users can choose the one that is best for their objective and delivers answers in a visually-appealing and easy to read format.</p>',
    },
    {
      id: 2,
      question: "How is OSO Chat different than other AI chatbots?",
      answer:
        '<p class="text-2xl leading-9 font-light text-gray-900">OSO Chat stands out from other AI chatbots in several ways, primarily due to its uncensored and unbiased language models. Here\'s what makes OSO Chat unique:</p>\n<ul class="list-disc p-[revert] space-y-6 mt-6">\n<li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Uncensored Responses:</span> Unlike many AI chatbots, OSO Chat provides uncensored responses, allowing you to receive information without unnecessary filters. This transparency promotes open dialogue and unrestricted access to knowledge, empowering users to engage in meaningful conversations and explore a wide range of topics without limitations.</li>\n<li class="text-2xl leading-9 font-light text-gray-900"><span class="text-black font-normal">Unbiased Language Models:</span> OSO Chat is designed to avoid biases and present information in a fair and unbiased manner. This ensures that users can trust the integrity of the responses they receive, making OSO Chat a reliable and trustworthy source of information.\n<br /><br />\nBy offering uncensored and unbiased language models, OSO Chat enables users to engage in discussions openly and access information without limitations or biases.</li>\n</ul>',
    },
    {
      id: 3,
      question: "What Language Models does OSO Chat support?",
      answer:
        '<p class="text-2xl leading-9 font-light text-gray-900 mt-6">\nOSO supports a custom-tuned model based on Mistral 7B with a modified dataset for uncensoring, deduping, cleaning, and quality, as well as to increase creativity and overall empathy. We are continually improving this model to provide better results for our users.\n<br/><br/>\nThe OSO team is also working on new models that specialize in areas such as <strong class=" text-gray-900">\ncoding assistants, data curation, image generation, and improving our aggregation of web resources.\n\n</strong>\n</p>',
    },
    {
      id: 4,
      question: "What is OSO Savant?",
      answer:
        '<p class="text-2xl leading-9 font-light text-gray-900">OSO Savant is a specialized framework within OSO Chat that focuses on specific functions. Instead of having broad language models for all tasks, OSO Savant gives users access to highly specialized AI agents designed for specific niches. This unique feature enables you to obtain more precise and focused responses tailored to meet specific requirements. With OSO Savant, you can easily switch between these specialized AI agents, ensuring that you can access the information you need with the assistance of experts in their respective fields.</p>',
    },
    {
      id: 5,
      question: "What does Unbiased and Uncensored Mean?",
      answer:
        '<p class="text-2xl leading-9 font-light text-gray-900">\nAt OSO, we\'re all about unrestricted, open access to knowledge. With OSO Chat, we\'ve removed many of the censorship constraints you might encounter on other AI platforms. Our own Uncensored model enables OSO Chat to provide users with useful, straightforward information.\n<br /><br />\nWhen we say "unbiased," we mean we train OSO models to take a neutral stance, free from political or popular opinion. We believe in empowering users to form their own conclusions on complex subjects by presenting information objectively.\n <br /><br />\n When we say "uncensored", we mean that OSO Chat removes many of the constraints and filters you might face on other AI platforms. Our Uncensored Chat model scans a broader range of information from the web without any filtering, providing a more open access to knowledge. This allows users to access information that might not be provided by other AI tools due to censorship or limitations.\n<br /><br />\nWhile our Uncensored model provides unfiltered information, the internet, which is the aggregate of all accessible data worldwide, contains a broad spectrum of information, some of which can be misleading, outdated, or incorrect. We strongly encourage users to filter and validate the information they obtain from OSO Chat.\n</p>',
    },
    {
      id: 6,
      question: "How does OSO Uncensored Chat work?",
      answer:
        "<p class=\"text-2xl leading-9 font-light text-gray-900\">Our most advanced and Uncensored LLM, affectionately known as OSO Pro, is like having a super knowledgeable and refreshingly honest best friend on speed dial. By upgrading to OSO Pro and enabling Uncensored Chat, you can expect more balanced and unbiased responses.\n<br /><br />\nThat being said, the onus is on users to make responsible use of the information that is provided. OSO doesn't promote or condone the use of our platform for illegal or unethical activities. While we're committed to transparency and sharing accurate, unbiased information, we expect our users to make informed decisions and use our services responsibly.\n</p>",
    },
    {
      id: 7,
      question: "What is the pricing?",
      answer:
        '<p class="text-2xl leading-9 font-light text-gray-900">OSO is free to use with certain usage limitations. If you want to unlock the full power of OSO, it only costs $20/month or $16/month when paid annually (17% discount) for a limited time, providing great value in productivity and time-saving.</p>',
    },
    {
      id: 8,
      question: "How do I get started?",
      answer:
        '<p class="text-2xl leading-9 font-light text-gray-900">OSO is available on Android, iOS, and Web. You can access OSO AI by going to this <span><strong><a href="https://l.oso.ai/prod" target="_blank">link<a/></strong></span> and completing a quick 2 minute survey.\n<br><br>\nAn OSO Pro subscription is required to access all of the Pro features.  With OSO Pro, you get our most advanced Uncensored model with faster search results, and unlimited Chats and Searches. </p>',
    },
  ];

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
      description: "Trained until 19th of Dec 2023 and continuously learning.",
      image: "chatphone-3",
      id: "deep",
    },
  ];
  return (
    <>
      <GoogleAnalytics gaTrackingID="G-WZHB0QP262" />
      <Banner
        title="Uncensored, Unbiased, Intelligent"
        description="OSO Chat enables users to chat about any topic without restriction."
        src="chat-video.mp4"
        poster="chat-video-poster.jpg"
        checklist={["Uncensored", "Unbiased", "Personalized"]}
      />
      {isDesktop && <OSOUseCaseLanding type="chat" />}
      {/* <Testimonials /> */}
      <Advantages
        title="Advantages of OSO Chat"
        description={
          "OSO Chat offers two AI language models to choose from including an uncensored version, enabling users to chat about any topic without restriction."
        }
      >
        <AdvantageCard
          title="Uncensored"
          description=" OSO values free speech and  <span class='font-medium'>unrestricted access to knowledge,</span> ensuring you receive in-depth and unfiltered answers."
          borderLess={false}
          image={PhoneUncensored}
          imageWidth="357"
          imageHeight="507"
          color="light-green-adv"
        />

        <AdvantageCard
          title="Unbiased"
          description="OSO believes in <span class='font-medium'>allowing you to formulate your own opinions</span> and provides different viewpoints on sensitive topics."
          borderLess={false}
          image={PhoneUnbiased}
          imageWidth="357"
          imageHeight="507"
          color="medium-green-adv"
        />

        <AdvantageCard
          title="Personalized"
          description="OSO <span class='font-medium'> learns from your preferences</span> over time to give you answers in the format, tone, and style that suits you best."
          borderLess={false}
          image={PhonePersonalized}
          imageWidth="357"
          imageHeight="507"
          color="green-adv"
        />
      </Advantages>

      <Comparisons title={"How OSO Chat transforms AI"}>
        <InnerChatSection comparisonContent={comparisonContent} />
      </Comparisons>

      <FAQ accordionData={accordionData} />
    </>
  );
};

export default ChatView;
