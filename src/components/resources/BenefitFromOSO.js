import React from "react";
import Avt1 from "../../../public/assets/avtars/avtar1.png";
import Avt2 from "../../../public/assets/avtars/avtar2.png";
import Avt3 from "../../../public/assets/avtars/avtar3.png";
import Avt4 from "../../../public/assets/avtars/avtar4.png";
import Avt5 from "../../../public/assets/avtars/avtar5.png";
import Avt6 from "../../../public/assets/avtars/avtar6.png";
import Avt7 from "../../../public/assets/avtars/avtar7.png";
import Avt8 from "../../../public/assets/avtars/avtar8.png";
import Avt9 from "../../../public/assets/avtars/avtar9.png";
import Avt10 from "../../../public/assets/avtars/avtar10.png";
import Avt11 from "../../../public/assets/avtars/avtar11.png";
import Avt12 from "../../../public/assets/avtars/avtar12.png";
import Avt13 from "../../../public/assets/avtars/avtar13.png";
import Avt14 from "../../../public/assets/avtars/avtar14.png";
import Avatar from "./Avatar";

const BenefitFromOSO = () => {
  const handleClick = () => {};

  return (
    <section className="sm:mt-8 py-4 mx-auto max-w-6xl">
      <div className="flex flex-col md:gap-4 gap-2">
        <h1 className="text-[40px] md:text-5xl text-center font-bold md:font-extrabold leading-[56px] md:leading-[80px] text-black max-w-4xl mx-auto py-6">
          Who Benefits from OSO?
        </h1>
          <div className="flex gap-3 py-6 md:gap-6 flex-wrap md:justify-center px-6 md:px-24">
            <div>
              {" "}
              <Avatar text="Researchers" avtarImage={Avt1} />
            </div>
            <div>
              {" "}
              <Avatar text="Shoppers" avtarImage={Avt2} />
            </div>
            <div>
              {" "}
              <Avatar text="UX Designers" avtarImage={Avt3} />
            </div>
            <div>
              {" "}
              <Avatar text="Lawyers" avtarImage={Avt4} />
            </div>
            <div>
              <Avatar text="Engineers" avtarImage={Avt5} />
            </div>
            <div>
              {" "}
              <Avatar text="Bloggers" avtarImage={Avt6} />
            </div>
            <div>
              {" "}
              <Avatar text="Marketers" avtarImage={Avt7} />
            </div>
            <div>
              {" "}
              <Avatar text="Accountant" avtarImage={Avt8} />
            </div>
            <div>
              {" "}
              <Avatar text="Scientists" avtarImage={Avt9} />
            </div>
            <div>
              {" "}
              <Avatar text="Influencers" avtarImage={Avt10} />
            </div>
            <div>
              {" "}
              <Avatar text="Students" avtarImage={Avt11} />
            </div>
            <div>
              {" "}
              <Avatar text="Investors" avtarImage={Avt12} />
            </div>
            <div>
              {" "}
              <Avatar text="World-Travelers" avtarImage={Avt13} />
            </div>
            <div>
              <Avatar text="Content Creators" avtarImage={Avt14} />
            </div>
          </div>
      </div>
      <div className="flex justify-center items-center py-8 w-full">
        <button
          className="bg-purple text-white text-2xl font-normal px-14 h-[74px] rounded-lg justify-center items-center flex gap-2"
          onClick={handleClick}
        >
          Try Using OSO
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
        </button>
      </div>
    </section>
  );
};

export default BenefitFromOSO;
