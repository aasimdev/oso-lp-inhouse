"use client";
import { useMediaQuery } from "react-responsive";
// import Jason from "../../../public/assets/images/jason.png";
// import Jan from "../../../public/assets/images/jan.png";
// import Ciaran from "../../../public/assets/images/man.jpeg";
// import Michael from "../../../public/assets/images/face.png";
// import Steve from "../../../public/assets/images/steveA.png";
// import Manu from "../../../public/assets/images/manu.jpg";
// import NewsLetter from "@/components/news-letter"
import FAQ from "@/components/FAQ/Index";
import GoogleAnalytics from "@/utils/google-analytics/anaylics";
// import Banner from "@/components/common/banner/Index"
import Hero from "@/components/landingPage/Hero";
import Chat from "@/components/landingPage/Chat";
import Feed from "@/components/landingPage/Feed";
import SearchAndOtherForLaptop from "@/components/landingPage/SearchAndOthers/SearchAndOtherForLaptop";
import OSOUseCaseLanding from "@/components/landingPage/OSOUseCaseLanding";
import Knowledgebase from "@/components/landingPage/knowledgebase";
import Button from "@/components/common/Button";

// const testimonialData = [
//   {
//     name: "Jason K.",
//     description:
//       "I stopped using chatGPT because it never gives me answers I want. I use OSO daily because it's real-time and uncensored giving me exactly what I need.",
//     image: Jason,
//   },
//   {
//     name: "Jan Gerych",
//     description: "Amazing, this changes the world.",
//     image: Jan,
//   },
//   {
//     name: "Michael S.",
//     description:
//       "It's next level from chatGPT bc you can pull data about real time trends, sentiment and analytics. Content creators are going to make a lot of money with OSO.",
//     image: Michael,
//   },
//   {
//     name: "Steve A.",
//     description: "Most useful AI I've ever seen.",
//     image: Steve,
//   },
//   {
//     name: "Manu A.",
//     description: "This is power like I've never seen before.",
//     image: Manu,
//   },
//   {
//     name: "Ciaran",
//     description: "Really powerful tool! Can see this being used for so much.",
//     image: Ciaran,
//   },
// ];

function LandingPage() {
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" });

  const accordionData = [
    {
      id: 1,
      question: "Why should I choose OSO?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO introduces an entirely new way to engage with the internet. Packed with three powerful tools – OSO Search, OSO Chat, and OSO News – you can access a wide range of information and engage in conversations without sifting through countless websites and articles. 
      <br /><br />
      OSO saves you time and offers an entirely new interactive experience, as easy as chatting with a friend. Unlike many competitors whose data is limited to 2021 or before, OSO employs cutting-edge models, ensuring you always have up-to-date, uncensored information.</p>`,
    },
    {
      id: 2,
      question: "What is the difference between OSO Search and OSO Chat?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO Search is your go-to tool for quick, comprehensive answers. OSO reads through the entire internet to find the latest information and delivers the results in a visually appealing format. It's your personal research assistant, providing you with real-time, unbiased insights. 
    <br /><br />
OSO Chat, on the other hand, is your conversational companion. It engages in interactive, text-based conversations with you. Unlike other chatbots whose data is limited to 2021 or before, OSO Chat was trained up to September 2023 and continuously learns as more questions are asked. Whether you're looking for a friendly chat or need information presented in a conversational format, OSO Chat is your companion of choice.
    <br /><br />
Together, OSO Search and OSO Chat form a powerful combo, quickly giving you the information you need, in the way that suits you best.</p>`,
    },
    {
      id: 3,
      question: "What does Unbiased and Uncensored mean?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">
At OSO, we're all about unrestricted, open access to knowledge. With OSO Chat, we've removed many of the censorship constraints you might encounter on other AI platforms. Our own Uncensored model enables OSO Chat to provide users with useful, straightforward information.
  <br /><br />
When we say "unbiased," we mean we train OSO models to take a neutral stance, free from political or popular opinion. We believe in empowering users to form their own conclusions on complex subjects by presenting information objectively.
 <br /><br />
 When we say "uncensored", we mean that OSO Chat removes many of the constraints and filters you might face on other AI platforms. Our Uncensored Chat model scans a broader range of information from the web without any filtering, providing a more open access to knowledge. This allows users to access information that might not be provided by other AI tools due to censorship or limitations.
<br /><br />
While our Uncensored model provides unfiltered information, the internet, which is the aggregate of all accessible data worldwide, contains a broad spectrum of information, some of which can be misleading, outdated, or incorrect. We strongly encourage users to filter and validate the information they obtain from OSO Chat.
</p>`,
    },

    {
      id: 4,
      question: "What is the pricing?",
      answer:
        '<p class="text-2xl leading-9 font-light text-gray-900">OSO is free to use with certain usage limitations. If you want to unlock the full power of OSO, it only costs $20/month or $16/month when paid annually (17% discount) for a limited time, providing great value in productivity and time-saving.</p>',
    },

    {
      id: 5,
      question: "How do I get started?",
      answer: `<p class="text-2xl leading-9 font-light text-gray-900">OSO is available on Android, iOS, and Web. You can access OSO AI by going to this <span><strong><a href="https://l.oso.ai/prod" target="_blank">link<a/></strong></span> and completing a quick 2 minute survey.
      <br><br>
      An OSO Pro subscription is required to access all of the Pro features.  With OSO Pro, you get our most advanced Uncensored model with faster search results, and unlimited Chats and Searches. </p>`,
    },
  ];

  return (
    <>
      <GoogleAnalytics gaTrackingID="G-2N2XN2FQX1" />

      {/* Banner */}
      <Hero />

      {/* Usecases */}
      {isDesktop && <OSOUseCaseLanding type="landing" />}

      <div className="px-6 mx-auto max-w-6xl">
        <SearchAndOtherForLaptop />
        <Chat />
        <Feed />
        <div className="md:flex justify-center items-center pt-12 md:pt-[60px] pb-16 md:pb-24">
          <Button
            label="Try OSO"
            arrowIcon={true}
            link="https://l.oso.ai/prod"
            target="_blank"
          />
        </div>
      </div>

      {/* Knowledgebase */}
      <Knowledgebase />

      {/* FAQs */}
      <FAQ accordionData={accordionData} />
    </>
  );
}

export default LandingPage;
