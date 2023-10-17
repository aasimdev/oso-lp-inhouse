import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

const SearchAndOtherForLaptop = () => {
  const [isTypingStarted, setTypingStarted] = useState(false);
  const [stringTypeOut, setStringTypeOut] = useState(false);
  const targetDivRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            setTypingStarted(true);
          }
        });
      },
      { threshold: 1 }
    );

    observer.observe(targetDivRef.current);

    return () => {
      observer.unobserve(targetDivRef.current);
    };
  }, []);
  return (
    <div
      className="hidden lg:flex flex-row gap-6 justify-between"
      ref={targetDivRef}
    >
      <div
        className={`bg-blue-100 w-full px-8 lg:p-16 rounded-2xl group relative overflow-hidden transition-all duration-300`}
      >
        <div className="bg-gradient-to-b from-[#73b2a800] to-[#8CDCD0] group-hover:from-[#73b2a800] group-hover:to-[#58C2B1] absolute left-0 top-0 right-0 bottom-0 w-full h-full transition-all duration-300 hover:transition-all hover:duration-300" />
        <a
          href="#"
          className="absolute left-0 top-0 right-0 bottom-0 w-full h-full z-20"
        ></a>
        <div className="relative z-10">
          <h2 className="text-[32px] font-semibold mb-2">OSO Search</h2>
          <p className="text-2xl font-light">
            Delivers a{" "}
            <span className="font-medium">comprehensive result.</span>
          </p>

          <div className="h-64">
            {isTypingStarted && (
              <>
                {stringTypeOut ? (
                  <div className="bg-black text-white p-4 rounded-[20px] mt-16">
                    <p className="text-2xl font-medium ">
                      🌍Top Sushi Places in Prague
                    </p>
                    <br />
                    <br />
                    <p className="text-2xl font-normal ">
                      Yami Sushi House: A popular sushi spot praised for its
                      exquisite sushi...
                    </p>
                  </div>
                ) : (
                  <div
                    className={`text-[40px] h-[216px] font-normal mt-12 md:mt-16  rounded-[20px] p-4 ${
                      stringTypeOut ? "bg-black" : "default"
                    } ${stringTypeOut ? "text-white" : "default"}`}
                  >
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(
                            "Where is the best sushi restaurant in Prague? 🍣"
                          )
                          .callFunction(() => {
                            setStringTypeOut(true);
                          })
                          .start();
                      }}
                    />
                  </div>
                )}{" "}
              </>
            )}
          </div>
          <div className="flex justify-end items-center mt-4 transform translate-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
            <p className="pr-4">Lean more</p>
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16.5" cy="16" r="16" fill="white" />
              <path
                d="M9.38911 16.8891L20.2069 16.8891L15.238 21.858L16.5002 23.1113L23.6113 16.0002L16.5002 8.88911L15.2469 10.1424L20.2069 15.1113L9.38911 15.1113L9.38911 16.8891Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        className={`bg-blue-100 w-full px-8 lg:p-16 rounded-2xl group relative overflow-hidden`}
      >
        <div className="bg-gradient-to-b from-[#F6F9FA] to-[#DEDEDE] absolute left-0 top-0 right-0 bottom-0 w-full h-full" />
        <div className="relative z-10">
          <h2 className="text-[32px] font-semibold mb-2">Others</h2>
          <p className="text-2xl font-light">
            Delivers a{" "}
            <span className="font-medium">general out-dated result.</span>
          </p>
          <div className="h-64">
            {isTypingStarted && (
              <>
                {stringTypeOut ? (
                  <div className="bg-black text-white p-4 rounded-[20px] mt-16">
                    <p className="text-2xl font-normal ">
                      don&apos;t have access to real-time information or current
                      restaurant reviews, as my knowledge was last updated in
                      September 2021. However, I can suggest some popular sushi
                      places in Prague as of my last update
                    </p>
                  </div>
                ) : (
                  <div
                    className={`text-[40px] h-[216px] font-normal mt-12 md:mt-16  rounded-[20px] p-4 ${
                      stringTypeOut ? "bg-black" : "default"
                    } ${stringTypeOut ? "text-white" : "default"}`}
                  >
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(
                            "Where is the best sushi restaurant in Prague? 🍣"
                          )
                          .callFunction(() => {
                            setStringTypeOut(true);
                          })
                          .start();
                      }}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndOtherForLaptop;
