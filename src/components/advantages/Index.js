import React from "react";

const Advantages = ({ title, children, page, description }) => {
  return (
    <section className="px-6 mx-auto max-w-6xl">
      <div className="py-16 md:text-center text-start">
        <h3 className="text-[40px] leading-tight md:text-5xl md:leading-relaxed font-bold text-black mb-2">
          {title}
        </h3>
        {!page && (
          <p className="text-2xl leading-9 font-light text-gray-900">
         {description}
          </p>
        )}
      </div>
      <div className="py-4 md:py-7 flex flex-col md:gap-[56px] gap-8">
        {children}
      </div>
    </section>
  );
};

export default Advantages;
