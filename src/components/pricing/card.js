import Image from "next/image";
import { useEffect, useState } from "react";
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
    currency,
    buttonTitle,
    monthlyUrl,
    annuallyUrl,
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
        className={`w-full p-8 rounded-2xl ${
          type === "pro"
            ? "border-4 border-purple"
            : "border-2 border-gray-400 "
        }`}
      >
        {type === "pro" && !isMonthly ? (
          <div className="flex-col gap-2 flex">
            <div className="flex  justify-between items-center">
              <div className="text-2xl font-bold leading-9">{title}</div>
              <div className="px-2 h-[30px] bg-[#D9FFBC] rounded-lg flex items-center justify-center text-black text-sm font-semibold">
                Save 17%
              </div>
            </div>
            <div className="text-gray-400 text-base font-normal leading-normal">
              {desc}
            </div>
          </div>
        ) : (
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="flex">
              <div className="text-2xl font-bold leading-9">{title}</div>
            </div>
            <div className="text-gray-400 text-base font-normal leading-normal">
              {desc}
            </div>
          </div>
        )}
        <div className="py-6">
          {type === "free" ? (
            <div className="text-5xl font-extrabold leading-normal">
              {amount}
            </div>
          ) : (
            <div className="flex justify-between items-center md:flex-row sm:flex-col">
              {isMonthly ? (
                <span className="text-black text-5xl font-extrabold leading-normal">
                  {currency}
                  {isMonthly ? amount : annuallyAmount}
                  <span className="text-black text-base font-semibold">
                    / {unit}
                  </span>
                </span>
              ) : (
                <span className="text-black text-5xl font-extrabold leading-normal">
                  <span className="text-gray-400 text-xl font-bold line-through leading-[30px] mr-1.5">
                    $20
                  </span>
                  {currency}
                  {isMonthly ? amount : annuallyAmount}
                  <span className="text-black text-base font-semibold">
                    / {isMonthly ? "month" : "month"}
                  </span>
                </span>
              )}
              {!isMonthly && (
                <div className="w-[87px] h-[26px] p-1 mt-2 justify-center items-center gap-2 inline-flex bg-gray-50 rounded-lg">
                  <div className="text-gray-100 text-xs font-normal leading-[18px]">
                    Billed Yearly{" "}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {type === "pro" ? (
          <Link
            href={isMonthly ? monthlyUrl : annuallyUrl}
            className="text-white text-base font-normal leading-normal h-12 px-6 py-2 bg-purple rounded-lg border border-purple justify-center items-center gap-2 flex"
          >
            {buttonTitle}
          </Link>
        ) : (
          <Link
            href="https://l.oso.ai/prod"
            className="w-full h-12 px-6 py-2 text-purple bg-white rounded-lg border border-purple justify-center items-center gap-2 inline-flex text-base font-normal mt-0.5"
          >
            {buttonTitle}
          </Link>
        )}
        <div className="flex-col justify-start items-start flex pt-8">
          {details.map((v, i) => {
            return (
              <div
                key={i + v.bulletPoint}
                className="py-2 flex-col justify-start items-start gap-2 flex"
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
