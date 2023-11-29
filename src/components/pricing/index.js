"use client";
import React, { useState } from "react";
import Card from "./card";
import { priceContent } from "@/constant/pricing";
import ToggleButton from "./ToogleButton";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <>
      <div className="flex justify-center">
        <ToggleButton handleToggle={handleToggle} isMonthly={isMonthly} />
      </div>
      <section className="pt-6 md:pt-8 px-6 mx-auto max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row justify-center gap-6">
          {priceContent.map((v, i) => {
            return <Card isMonthly={isMonthly} price={v} key={i + v.type} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Pricing;
