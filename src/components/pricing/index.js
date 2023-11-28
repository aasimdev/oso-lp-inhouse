"use client";
import React, { useState } from "react";
import Card from "./card";
import { priceContent } from "@/constant/pricing";
import ToggleButton from "./ToogleButton";

const Pricing = () => {
  const [annually, setAnnually] = useState(false);

  const handleToggle = () => {
    setAnnually(!annually);
  };

  return (
    <>
      <div className="flex justify-center">
        <ToggleButton handleToggle={handleToggle} annually={annually} />
      </div>
      <section className="pt-6 sm:pt-14">
        <div className="px-6 mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row justify-center gap-6">
            {priceContent.map((v, i) => {
              return <Card annually={annually} price={v} key={i + v.type} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
