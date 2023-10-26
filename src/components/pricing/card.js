import React from "react";

const Card = ({ price }) => {
  const { type, title, desc, amount, unit, currency, buttonTitle, details } =
    price;
  return (
    <>
      <div
        className={`w-full md:w-[348px] lg:w-[348px] p-4 lg:p-8 rounded-2xl ${
          type === "pro"
            ? "border-4 border-[#8E33FF]"
            : "border-2 border-gray-400 "
        } flex flex-col justify-center items-center gap-2 m-2`}
      >
        <div className="self-stretch h-[250px] flex-col justify-start items-start flex">
          <div className="self-stretch h-[68px] flex-col justify-start items-start gap-2 flex">
            <div className="w-[79px] text-2xl font-bold leading-9">{title}</div>
            <div className="self-stretch text-gray-400 text-base font-normal leading-normal">
              {desc}
            </div>
          </div>
          <div className="py-6 justify-center items-center gap-2 inline-flex">
            <div className="flex-col justify-center items-start gap-1 inline-flex">
              {type === "free" ? (
                <div className="text-5xl font-extrabold leading-[64px]">
                  {amount}
                </div>
              ) : (
                <div className="flex-col justify-center items-start gap-1 inline-flex">
                  <div>
                    <span className="text-black text-5xl font-extrabold leading-[64px]">
                      {currency}
                      {amount}
                    </span>
                    <span className="text-black text-4xl font-semibold leading-10 tracking-tight">
                      {" "}
                    </span>
                    <span className="text-black text-base font-semibold leading-normal">
                      / {unit}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="self-stretch h-[70px] flex-col justify-center items-center flex">
            {type === "pro" ? (
              <div className="self-stretch h-12 px-6 py-2 bg-gray-400 rounded-lg border border-gray-400 justify-center items-center gap-2 inline-flex">
                <button className="text-white text-base font-semibold leading-normal">
                  {buttonTitle}
                </button>
              </div>
            ) : (
              <div className="self-stretch h-12 px-6 py-2 bg-white rounded-lg border border-[#8E33FF] justify-center items-center gap-2 inline-flex">
                <button className="text-[#8E33FF] text-base font-semibold leading-normal">
                  {buttonTitle}
                </button>
              </div>
            )}
            <div className="w-[347px] text-white text-sm font-normal leading-snug">
              {}
            </div>
          </div>
        </div>
        <div className="self-stretch h-[200px] flex-col justify-start items-start flex">
          {details.map((v, i) => {
            return (
              <div
                key={i + v.bulletPoint}
                className="h-10 pr-6 py-2 flex-col justify-start items-start gap-2 flex"
              >
                <div className="self-stretch h-6 flex-col justify-start items-start flex">
                  <div
                    className={`self-stretch text-base font-normal leading-normal ${
                      !v.isEnable && "text-gray-400 line-through"
                    }`}
                  >
                    {v.bulletPoint}
                  </div>
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
