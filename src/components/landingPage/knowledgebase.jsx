import React from "react";
import KnowledgebaseCard from "./knowledgebaseCard";
import Link from "next/link";

const KnowledgebaseContent = [
  {
    title: "Enhancing Results through Prompt Engineering in OSO AI",
    url: "https://learn.oso.ai/tips-tricks/prompt-engineering?from_search=134189309",
  },
  {
    title: "Your Personal Classroom Sidekick – Less Study, Better Grades",
    url: "https://learn.oso.ai/use-cases/students?from_search=134189374",
  },
  {
    title: "Everything you need to know about OSO",
    url: "https://learn.oso.ai/getting-started/what-is-oso?from_search=134189407",
  },
];

const Knowledgebase = () => {
  return (
    <>

      <section className="px-6 mx-auto max-w-6xl">
        {/* Knowledgebase */}
        <div className="bg-gradient-to-b from-[#282D39] to-[#161C24] p-8 md:p-16 rounded-2xl flex flex-col md:flex-row gap-8 justify-between items-start">
          <div className="max-w-[430px] flex-auto">
            <h5 className="text-white font-bold text-[32px] sm:text-5xl mb-2">Knowledgebase</h5>
            <p className="text-2xl font-light text-gray-500">Need help with OSO? Search for answers or browse our Knowledgebase.</p>
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
           

        </div>
        {/* Knowledgebase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 pb-16">
          {KnowledgebaseContent.map((v, i) => {
            return <KnowledgebaseCard key={i} title={v.title} url={v.url} />;
          })}
        </div>

      </section>
    </>
  );
};

export default Knowledgebase;
