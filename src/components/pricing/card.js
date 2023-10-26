import React from "react";

const Card = ({ price }) => {
  console.log("price---------" , price)
  return (
    <>
      <div className="w-full md:w-[348px] lg:w-[348px] p-4 lg:p-8 rounded-2xl border-2 border-gray-400 flex flex-col justify-center items-center gap-2 m-2">
        <div className="self-stretch h-[250px] flex-col justify-start items-start flex">
          <div className="self-stretch h-[68px] flex-col justify-start items-start gap-2 flex">
            <div className="w-[79px] text-2xl font-bold leading-9">{}</div>
            <div className="self-stretch text-gray-400 text-base font-normal leading-normal">
              {}
            </div>
          </div>
          <div className="py-6 justify-center items-center gap-2 inline-flex">
            <div className="flex-col justify-center items-start gap-1 inline-flex">
              <div className="text-5xl font-extrabold leading-[64px]">Free</div>
            </div>
          </div>
          <div className="self-stretch h-[70px] flex-col justify-center items-center flex">
            <div className="self-stretch h-12 px-6 py-2 bg-white rounded-lg border border-purple-600 justify-center items-center gap-2 inline-flex">
              <div className="text-purple-600 text-base font-semibold leading-normal">
                Try OSO for free
              </div>
            </div>
            <div className="w-[347px] text-white text-sm font-normal font-['Public Sans'] leading-snug">
              Cancel anytime.
            </div>
          </div>
        </div>
        <div className="self-stretch h-[200px] flex-col justify-start items-start flex">
          <div className="h-10 pr-6 py-2 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-6 flex-col justify-start items-start flex">
              <div className="self-stretch text-base font-normal leading-normal">
                10 Searches per day
              </div>
            </div>
          </div>
          <div className="h-10 pr-6 py-2 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-6 flex-col justify-start items-start flex">
              <div className="self-stretch text-base font-normal leading-normal">
                25 Messages per day
              </div>
            </div>
          </div>
          <div className="h-10 pr-6 py-2 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-6 flex-col justify-start items-start flex">
              <div className="self-stretch text-base font-normal leading-normal">
                Interactive News
              </div>
            </div>
          </div>
          <div className="h-10 pr-6 py-2 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-6 flex-col justify-start items-start flex">
              <div className="self-stretch text-gray-400 text-base font-normal line-through leading-normal">
                OSO Uncensored LLM
              </div>
            </div>
          </div>
          <div className="h-10 pr-6 py-2 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-6 flex-col justify-start items-start flex">
              <div className="self-stretch text-gray-400 text-base font-normal line-through leading-normal">
                Voice Conversations
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[348px] lg:w-[348px] p-4 lg:p-8 rounded-2xl border-4 border-[#8E33FF] flex flex-col justify-center items-center gap-2 m-2">
        <div className="self-stretch h-[250px] flex-col justify-start items-start flex">
          <div className="self-stretch h-[68px] flex-col justify-start items-start gap-2 flex">
            <div className="w-[79px] text-black text-2xl font-bold font-['Roboto'] leading-9">
              Pro
            </div>
            <div className="self-stretch text-gray-400 text-base font-normal font-['Roboto'] leading-normal">
              Unlock the Full Potential of OSO
            </div>
          </div>
          <div className="py-6 justify-center items-center gap-2 inline-flex">
            <div className="flex-col justify-center items-start gap-1 inline-flex">
              <div>
                <span className="text-black text-5xl font-extrabold font-['Roboto'] leading-[64px]">
                  $20
                </span>
                <span className="text-black text-4xl font-semibold font-['Public Sans'] leading-10 tracking-tight">
                  {" "}
                </span>
                <span className="text-black text-base font-semibold font-['Roboto'] leading-normal">
                  / month
                </span>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[70px] flex-col justify-center items-center flex">
            <div className="self-stretch h-12 px-6 py-2 bg-gray-400 rounded-lg border border-gray-400 justify-center items-center gap-2 inline-flex">
              <div className="text-white text-base font-semibold font-['Roboto'] leading-normal">
                Coming soon
              </div>
            </div>
            <div className="w-[347px] text-white text-sm font-normal font-['Public Sans'] leading-snug">
              Cancel anytime.
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start flex">
          <div className="h-10 px-8 py-2 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-6 flex-col justify-start items-start flex">
              <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">
                Unlimited Searches
              </div>
            </div>
          </div>
          <div className="h-10 px-8 py-2 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-6 flex-col justify-start items-start flex">
              <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">
                Unlimited Messages
              </div>
            </div>
          </div>
          <div className="h-10 px-8 py-2 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-6 flex-col justify-start items-start flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                  Customizable Interactive News
                </div>
                <div className="w-4 h-4 relative"></div>
              </div>
            </div>
          </div>
          <div className="h-10 px-8 py-2 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-6 flex-col justify-start items-start flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                  OSO Uncensored LLM
                </div>
                <div className="w-4 h-4 relative"></div>
              </div>
            </div>
          </div>
          <div className="h-10 px-8 py-2 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-6 flex-col justify-start items-start flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                  Voice Conversations
                </div>
                <div className="w-4 h-4 relative"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
