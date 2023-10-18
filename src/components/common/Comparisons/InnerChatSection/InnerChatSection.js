import React, { useState } from "react";
import "react-slideshow-image/dist/styles.css";

import ComparisonContent from "../ComparisonContent/ComparisonContent";
import Phone from "../Phone/Phone";

const InnerSections = ({ comparisonContent }) => {
  const [selected, setSelected] = useState("stay");
  const getImagePath = () => {
    const foundObject = comparisonContent.find((obj) => obj["id"] === selected);
    return foundObject.image;
  };
  return (
    <div
      id="animation-container"
      className="flex flex-col md:justify-center top-0 bg-white pt-8 md:pb-[20px] md:pt-24"
    >
      <div className="md:flex md:flex-nowrap flex-wrap justify-between">
        <div className="contentWrap w-full md:w-[370px] md:mt-[52px] flex flex-col gap-12 md:gap-8 flex-grow-0 flex-shrink-0 basis-auto md:mb-12 mb-8 sm:mb-0">
          {comparisonContent.map((item) => (
            <>
              <div
                key={item.id}
                className={`text-block opacity-100 md:cursor-pointer ${
                  selected === item.id ? "md:opacity-100" : "md:opacity-20"
                }`}
                onClick={() => setSelected(item.id)}
              >
                <ComparisonContent
                  title={item.title}
                  description={item.description}
                />
              </div>
              <div className="right-elemetns relative overflow-hidden w-full md:hidden flex  ">
                <div className="w-full h-full relative overflow-hidden">
                  <Phone obj={item.image} chatPage />
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="right-elemetns relative overflow-hidden w-full md:flex hidden  ">
          <div className="w-full h-full relative overflow-hidden">
            <Phone obj={getImagePath()} chatPage />
          </div>
        </div>
      </div>
    </div>
  );
};
export default InnerSections;
