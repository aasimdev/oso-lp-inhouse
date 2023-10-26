"use client";
import React from "react";
import Card from "./card";
import { priceContent } from "@/constant/pricing";


const Pricing = () => {
    
  return (
    <>
      <section className="pt-8 sm:pt-16">
        <div className="px-6 mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row justify-center gap-6">
            {priceContent.map((v, i) => {
              return <Card price={v} key={i + v.type} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
