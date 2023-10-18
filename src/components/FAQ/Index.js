import React, { useState } from "react";
import Question from "./Question";

const FAQ = ({ accordionData }) => {
  console.log(accordionData);
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const toggleAccordion = (accordionId) => {
    if (openAccordionId === accordionId) {
      setOpenAccordionId(null); // Close the currently open accordion
    } else {
      setOpenAccordionId(accordionId); // Open the clicked accordion
    }
  };
  return (
    <section className="px-6 mx-auto max-w-6xl">
      <div className="md:text-center text-satrt pt-16 md:pt-[80px]">
        <h3 className="md:text-5xl text-[40px] font-extrabold text-black md:leading-[64px] leading-tight">
          Frequently Asked Questions
        </h3>
      </div>
      <div className="mt-16 md:mt-20 flex flex-col gap-4 md:gap-7">
        {accordionData &&
          accordionData.length > 0 &&
          accordionData.map((item) => (
            <Question
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openAccordionId === item.id}
              toggleAccordion={() => toggleAccordion(item.id)}
            />
          ))}
      </div>
    </section>
  );
};

export default FAQ;
