import Image from "next/image";
import Link from "next/link";
import React from "react";

const Feed = () => {
  return (
    <div
      className={`rounded-2xl lg:p-16 p-8 relative overflow-hidden lg:h-[571px] h-[639px] md:h-full group z-0 md:mt-14 mt-12 lp-feed-box`}
    >
      <Link
        href="#"
        className="absolute left-0 top-0 bottom-0 right-0 w-full h-full z-20"
      />
      <div className="flex justify-between items-start max-w-md">
        <div>
          <p className="text-[32px] md:text-5xl font-bold">OSO News</p>
          <p className="text-2xl font-light mt-2 ">
            Interactive
            <strong className="text-2xl font-medium">
              {" "}
              news you can chat with
            </strong>{" "}
            to stay updated without having to read through articles.
          </p>
        </div>
      </div>

      <div className="absolute hidden md:static md:flex items-start gap-2 mt-60 md:mt-12 ml-3 md:ml-[18px]">
        <Image
          src="/assets/icons/oso-logo-black.svg"
          alt="Example SVG"
          width={24}
          height={34}
        />
        <div className="w-[46%] lg:w-[55%] rounded-[20px] bg-black">
          <p className="hidden md:block p-4 text-xl font-normal text-white">
            📝 Report on Apple&apos;s iPhone 15 Camera Improvements and Flagship
            Features
            <br />
            <br />
            📸 Smart Camera Improvements in iPhone 15 The iPhone 15 introduces
            several smart camera improvements. - Larger main sensor for better
            image quality and low-light performance.
            <br />
            ...
          </p>
          <p className="block md:hidden p-4 text-xl font-normal text-white">
            📝 Report on Apple&apos;s iPhone 15 Camera Improvements and Flagship
            Features
            <br />
            <br />
            📸 Smart Camera Improvements in iPhone 15 ...
            <br />
          </p>
        </div>
      </div>

      <div
        className={`md:absolute bottom-0  mt-4 md:mt-0 -mb-8 lg:mb-0  lg:order-2 right-16`}
      >
        <Image
          src="/assets/images/feed-phone.png"
          alt="Example SVG"
          width={250.8}
          height={653.895}
          className="hidden md:block"
          // title={title}
          // alt={title}
        />
        <Image
          src="/assets/images/Feed.png"
          alt="Example SVG"
          width={350.8}
          height={653.895}
          // title={title}
          // alt={title}
          className="md:hidden"
        />
      </div>
      {/* {image2 && <Image src={image2} alt='' className='absolute right-7 bottom-0 w-[430px] object-cover'/>} For Second Image */}

      <div className="absolute md:top-16 md:right-16 bottom-8 right-8 z-[1]">
        <div
          className={`inline-flex items-center gap-3 transform translate-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-2 }`}
        >
          <span>Learn more</span>

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
  );
};

export default Feed;
