import React from "react";

const ComparisonContent = ({ isMobile, title, description }) => {
  console.log("isMobile", isMobile);
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-[32px] font-medium leading-tight text-black">
        {title}
      </h4>
      <p className="text-2xl leading-8 font-light text-gray-100">
        {description}
      </p>
    </div>
  );
};

export default ComparisonContent;
