import React from "react";
import KnowledgebaseCard from "./knowledgebaseCard";
import Link from "next/link";

const KnowledgebaseContent = [
  {
    title: "OSO, The Ultimate AI Travel Planner: Seamless, Up-to-Date AI Travel Planning for Stress-Free Vacations",
    url: "https://learn.oso.ai/en_US/use-cases/travel",
    backgroundColor : "bg-[#c5fbf2] hover:bg-gradient-to-t from-[#6bccbd] to-[#c5fbf2]",
  },
  {
    title: "Revolutionize Your Decision Making with OSO's Up-to-date AI Search Engine and AI Ratings Algorithm",
    url: "https://learn.oso.ai/en_US/use-cases/review-restaurants",
    backgroundColor : 'bg-[#d3fcd2] hover:bg-gradient-to-t from-[#9cf89f] to-[#d3fcd2]'
  },
  {
    title: "OSO: Your AI-Powered Search Engine for Up-to-Date Professional Research",
    url: "https://learn.oso.ai/en_US/use-cases/research",
    backgroundColor : 'bg-[#fff5cc] hover:bg-gradient-to-t from-[#feea99] to-[#fff5cc]'
  },
];

const Knowledgebase = () => {
  return (
    <>

      <section className="px-6 mx-auto max-w-6xl">
        {/* Knowledgebase */}
        <Link href="https://learn.oso.ai/" target="_blank" className="bg-[#f67bf6] p-8 md:p-16 rounded-2xl flex flex-col md:flex-row gap-8 justify-between items-start">
          <div className="md:max-w-[430px] flex-auto">
            <h5 className="text-white font-bold text-[32px] sm:text-5xl mb-2">Knowledgebase</h5>
            <p className="text-2xl font-light text-white md:w-[430px] leading-loose">Need help with OSO? Search for answers or browse our Knowledgebase.</p>
          </div>
          <div className="w-full text-right">
          <Link href="https://learn.oso.ai/" target="_blank" className="inline-flex items-center justify-end gap-4 text-white text-base">
              <span>Lean more</span>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16.5" cy="16" r="16" fill="white" />
                <path d="M9.38911 16.8891L20.2069 16.8891L15.238 21.858L16.5002 23.1113L23.6113 16.0002L16.5002 8.88911L15.2469 10.1424L20.2069 15.1113L9.38911 15.1113L9.38911 16.8891Z" fill="black" />
              </svg>

            </Link>
          </div>
           

        </Link>
        {/* Knowledgebase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 pb-16">
          {KnowledgebaseContent.map((v, i) => {
            return <KnowledgebaseCard key={i} title={v.title} url={v.url} backgroundColor={v.backgroundColor} hoverBgColor={v.hoverBgColor}/>;
          })}
        </div>

      </section>
    </>
  );
};

export default Knowledgebase;
