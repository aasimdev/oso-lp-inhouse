import Image from "next/image";
import React, { useState } from "react";

const Phone = ({ title, obj }) => {
  return (
    <div
      className={`flex flex-col gap-6 md:gap-8 relative ${title === "OSO" ? "lg:-mr-11" : ""
        }`}
    >
      <p className="text-center text-[21px] font-medium text-black">{title}</p>
      <div className="relative lg:max-w-full max-w-[348px] lg:h-full mx-auto">
        <Image
          src={`/assets/gif/${obj}.gif`}
          alt=""
          width={500}
          height={800}
          loading = 'eager'
          className="lg:h-[95%] w-full h-full"
        />
      </div>
    </div>
  );
};

export default Phone;
