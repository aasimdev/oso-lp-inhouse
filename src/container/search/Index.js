"use client";
import AdvantageCard from "@/components/advantages/AdvantageCard";
import Advantages from "@/components/advantages/Index";
import Banner from "@/components/common/banner/Index";
// import Testimonials from "@/components/testimonials/Index";

import webImage from "../../../public/assets/images/updated.png";
import SecondPhone from "../../../public/assets/images/mobilephone.png";
import UpdatePhone from "../../../public/assets/images/updatePhones.png";
import UpdatePhone2 from "../../../public/assets/images/updatephone-2.png";

import FAQ from "@/components/FAQ/Index";
import Comparisons from "@/components/common/Comparisons/Comparisons";
import InnerSections from "@/components/common/Comparisons/InnerSections/InnerSections";
import OSOUseCaseLanding from "@/components/landingPage/OSOUseCaseLanding";
import { useMediaQuery } from "react-responsive";

const SearchView = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" });
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
      answer:
        '<p class="text-2xl leading-9 font-light text-gray-900">OSO is free to use with certain usage limitations. If you want to unlock the full power of OSO, it only costs $20/month or $16/month when paid annually (17% discount) for a limited time, providing great value in productivity and time-saving.</p>',
    },
    {
      id: 4,
      question: "How do I get started?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO is available on Android, iOS, and Web. You can access OSO AI by going to this <span><strong><a href="https://l.oso.ai/prod" target="_blank">link<a/></strong></span> and completing a quick 2 minute survey.
      <br><br>
      An OSO Pro subscription is required to access all of the Pro features.  With OSO Pro, you get our most advanced Uncensored model with faster search results, and unlimited Chats and Searches. </p>`,
    },
  ];
  return (
    <>
      <Banner
        title="Experience the Future of Search"
        description="Find what you’re looking for faster by letting OSO do the searching for you."
        src="search-video.mp4"
        poster="search-video-poster.jpg"
        checklist={["Uncensored", "Up-to-date", "Unbiased"]}
      />
      {isDesktop && <OSOUseCaseLanding type="search" />}
      {/* <Testimonials /> */}

      <Advantages title="Advantages of OSO Search">
        <AdvantageCard
          title="Up to Date"
          description="Unlike AI chatbots that have a set knowledge cutoff, <span class='font-medium'>OSO’s AI Search Engine ensures you receive the most recent</span> and relevant information."
          borderLess={false}
          image={webImage}
          imageWidth="357"
          imageHeight="507"
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
      <Comparisons title={"Use OSO to do what other AI can't"}>
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
