"use client";
import GoogleAnalytics from "@/utils/google-analytics/anaylics";
import Pricing from "@/components/pricing/index";

const PriceView = () => {
  return (
    <>
      <section className="sm:mt-8 py-6 sm:py-8 px-6 mx-auto max-w-6xl">
        <div className="flex flex-col md:gap-4 gap-2">
          <h1 className="md:text-[56px] text-[40px] md:text-center text-left font-extrabold leading-[56px] md:leading-[80px] text-black max-w-4xl mx-auto">
            Simple and transparent pricing
          </h1>
          <p className="text-gray-800 md:text-center text-left md:text-[32px] text-2xl font-light leading-tight">
            Try OSO risk-free, cancel anytime.
          </p>
        </div>
      </section>

      <Pricing />
    </>
  );
};

export default PriceView;
