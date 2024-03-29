import OSOWorkCard from "./OSOWorkCard";
import Link from "next/link";

const OSOWork = () => {
  const handleClick = () => {};

  return (
    <section className="py-6 md:pt-16 mx-auto max-w-6xl ">
      <div className="px-6 flex flex-col md:gap-4 gap-2">
        <h1 className="text-[40px] md:text-5xl md:text-center font-bold md:font-extrabold  text-black">
          How OSO works?
        </h1>
        <div className="flex flex-col py-6 md:py-12">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            <OSOWorkCard
              bgColor={"bg-[#61F3F3]"}
              title={"Search"}
              desc="OSO's AI Search Engine reads through the internet for you and provides a detailed summary."
              videoID="7y2r9MrUeQ8"
            />

            <OSOWorkCard
              bgColor={"bg-[#77ED8B]"}
              desc="Uncensored and unbiased AI Chat."
              title={"Chat"}
              videoID="FpWF0i0vxGs"
            />

            <OSOWorkCard
              bgColor={"bg-[#FFD666]"}
              desc="Interactive AI News with your personal AI news correspondent. "
              title={"News"}
              videoID="gAfKNS92eYM"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center md:pt-10 w-full px-6">
        <Link
          href="https://l.oso.ai/prod"
          className="tryOSOButton bg-purple text-white text-2xl font-normal rounded-lg"
          onClick={handleClick}
        >
          Try OSO
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default OSOWork;
