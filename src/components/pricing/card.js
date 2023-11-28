import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import Link from "next/link";

const Card = ({ price, isMonthly }) => {
  const {
    type,
    title,
    desc,
    amount,
    annuallyAmount,
    unit,
    billedType,
    currency,
    buttonTitle,
    monthlyUrl,
    annuallyUrl,
    freeUrl,
    details,
  } = price;
  const [isMobile, setIsMobile] = useState(false);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 720);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      updateIsMobile();
      window.addEventListener("resize", updateIsMobile);
      return () => {
        window.removeEventListener("resize", updateIsMobile);
      };
    }
  }, []);

  return (
    <>
      <div
        className={`w-full md:w-[348px] mx-auto lg:mx-0 p-8 rounded-2xl ${
          type === "pro"
            ? "border-4 border-[#8E33FF]"
            : "border-2 border-gray-400 "
        } gap-2`}
      >
        <div className="self-stretch flex-col justify-start items-start flex">
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="text-2xl font-bold leading-9">{title}</div>
            <div className="self-stretch text-gray-400 text-base font-normal leading-normal">
              {desc}
            </div>
          </div>
          <div className="py-6 justify-center items-center gap-2 flex w-full">
            <div className="flex-col justify-center gap-1 flex w-full">
              {type === "free" ? (
                <div className="text-5xl font-extrabold">
                  {amount}
                </div>
              ) : (
                <div className="flex-row justify-between items-end flex">
                  <div>
                    <span className="text-black text-5xl font-extrabold">
                      {currency}
                      {isMonthly ? amount : annuallyAmount}
                    </span>
                    <span className="text-black text-4xl font-semibold tracking-tight">
                      {" "}
                    </span>
                    <span className="text-black text-base font-semibold">
                      / {unit}
                    </span>
                  </div>
                  {!isMonthly && (
                    <div className="w-[87px] h-[26px] p-1 justify-center items-center gap-2 inline-flex bg-gray-50 rounded mb-1">
                      <div className="text-gray-500 text-xs font-normal leading-[18px]">
                        Billed Yearly{" "}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="self-stretch h-[70px] flex-col justify-center items-center flex">
            {type === "pro" ? (
              <Link
                href={isMonthly ? monthlyUrl : annuallyUrl}
                target="_blank"
                className="text-white text-base font-normal leading-normal self-stretch h-12 px-6 py-2 bg-[#8E33FF] rounded-lg border border-[#8E33FF] justify-center items-center gap-2 inline-flex"
              >
                {buttonTitle}
              </Link>
            ) : (
              <Link
                href={freeUrl}
                className="text-[#8E33FF] text-base font-normal leading-normal self-stretch h-12 px-6 py-2 bg-white rounded-lg border border-[#8E33FF] justify-center items-center gap-2 inline-flex"
              >
                {buttonTitle}
              </Link>
            )}
            <div className="w-[347px] text-white text-sm font-normal leading-snug">
              {}
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start flex">
          {details.map((v, i) => {
            return (
              <div
                key={i + v.bulletPoint}
                className=" pr-6 py-2 flex-col justify-start items-start gap-2 flex"
              >
                <div className="self-stretch flex-col justify-start items-start flex">
                  <div
                    className={`self-stretch text-base font-normal leading-normal flex gap-1 items-center ${
                      !v.isEnable && "text-gray-400 line-through"
                    }`}
                  >
                    {v.bulletPoint}
                    {v.isIcon && (
                      <button
                        data-tooltip-id="pricing-tooltip"
                        data-tooltip-content={v.tooltip}
                      >
                        <Image
                          src="/assets/icons/info.svg"
                          width="16"
                          height="16"
                          alt="info"
                        />
                      </button>
                    )}
                  </div>
                  <Tooltip
                    id="pricing-tooltip"
                    className="max-w-[274px] !bg-black !p-2 !rounded !text-sm"
                    events={isMobile ? ["click"] : ["hover"]}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
