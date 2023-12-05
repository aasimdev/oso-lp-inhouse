import React from "react";
import KnowledgebaseCard from "./knowledgebaseCard";

const KnowledgebaseContent = [
  {
    title: "Enhancing Results through Prompt Engineering in OSO AI",
    url: "https://learn.oso.ai/",
  },
  {
    title: "Your Personal Classroom Sidekick – Less Study, Better Grades",
    url: "https://learn.oso.ai/",
  },
  {
    title: "Everything you need to know about OSO",
    url: "https://learn.oso.ai/",
  },
];

const Knowledgebase = () => {
  return (
    <>
      <section className="px-6 md:px-24 flex flex-col justify-center py-4">
        <div className="md:w-[1088px] md:h-64 md:p-16 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl justify-between flex-col md:flex-row w-[345px]  p-8">
          <div className="md:text-5xl text-white text-[32px] font-bold">
            Knowledgebase
            <div className="md:w-[422px] text-gray-400 text-2xl font-light leading-loose w-[281px]  ">
              Need help with OSO? Search for answers or browse our
              Knowledgebase.
            </div>
          </div>
          <div className="text-white text-base font-normal flex items-center gap-2">
            Lean more
            <div>
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black"
              >
                <circle
                  cx="11.5"
                  cy="11"
                  r="11"
                  fill="white"
                  className="text-white"
                />
                <g id="ArrowBack">
                  <path
                    id="Vector_35"
                    d="M4.38911 11.8891L15.2069 11.8891L10.238 16.858L11.5002 18.1113L18.6113 11.0002L11.5002 3.88911L10.2469 5.14244L15.2069 10.1113L4.38911 10.1113L4.38911 11.8891Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="pt-8 flex-col md:flex-row gap-6">
          {KnowledgebaseContent.map((v, i) => {
            return <KnowledgebaseCard key={i} title={v.title} url={v.url} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Knowledgebase;
