import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Phone = ({ title, obj, chatPage }) => {
  const pathname = usePathname();
  return (
    <div
      className={`flex flex-col ${!chatPage && "gap-6 md:gap-8"} relative ${
        title === "OSO" ? "lg:-mr-11" : ""
      }`}
    >
      {!chatPage && (
        <p className="text-center text-[21px] font-medium text-black">
          {title}
        </p>
      )}

      <div
        className={`relative xl:max-w-full sm:max-w-[348px] ${
          chatPage && "w-[299px]"
        } xl:h-full sm:mx-auto`}
      >
        {pathname === "/search" ? (
          <Image
            src={`/assets/gif/${obj}.gif`}
            alt=""
            width={500}
            height={800}
            loading="eager"
            className="lg:h-[95%] w-full h-full"
          />
        ) : (
          <Image
            src={`/assets/images/${obj}.png`}
            alt=""
            width={500}
            height={800}
            loading="eager"
            className="lg:h-[95%] w-full h-full"
          />
        )}
      </div>
    </div>
  );
};

export default Phone;
