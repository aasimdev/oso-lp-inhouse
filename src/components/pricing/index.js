"use client";
import React from "react";
import Card from "./card";
import { priceContent } from "@/constant/pricing";

const Pricing = () => {
    
  return (
    <>
      <section className="pt-12 sm:pt-[64px]">
        <div className="px-6 mx-auto max-w-6xl">
          <div className="lg:pl-[120px] xl:pl-[180px] flex flex-col md:flex-row lg:flex-row">
            {priceContent.map((v, i) => {
              return <Card price={v} key={i + v.type} />;
            })}
            <Card />
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
