"use client";
import React from "react";
import GoogleAnalytics from "@/utils/google-analytics/anaylics";
import Pricing from "@/components/pricing/index";

const PriceView = () => {
  return (
    <>
      <GoogleAnalytics gaTrackingID="G-M7WJFKYHCL" />

      <section>
        <div className="px-2 sm:px-6 md:px-6 mx-auto max-w-6xl">
          <div className="pt-8 md:pt-32 pb-32">
            <div className="flex flex-col md:gap-6 gap-2  md:mb-6">
              <h1 className="md:text-[56px] text-[40px] md:text-center text-left font-extrabold leading-[56px] md:leading-[80px] text-black max-w-4xl mx-auto">
                Simple, transparent pricing
              </h1>
              <p className="text-gray-800 md:text-center text-left md:text-[32px] text-2xl font-light leading-tight">
                No credit card required, cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </>
  );
};

export default PriceView;
