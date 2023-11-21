import React from "react";
import UseCaseCard from "../usecaseCard/index";
import PIC1 from "../../../public/assets/newpage/Image1.png";
import AVTAR from "../../../public/assets/newpage/avtar.svg";

const CreativeUsecase = () => {
  const handleClick = () => {};

  return (
    <section className="sm:mt-8 py-4 mx-auto max-w-6xl">
      <div className="flex flex-col md:gap-4 gap-2">
        <h1 className="text-5xl text-center font-extrabold leading-[56px] md:leading-[80px] text-black max-w-4xl mx-auto">
          Creative ways to use OSO
        </h1>
      </div>
      <div className="mx-auto max-w-6xl flex flex-col py-6">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
          <UseCaseCard
            bgImage={PIC1}
            avatar={AVTAR}
            name={"Laura Aden"}
            trip={"Plan a Trip"}
          />
          <UseCaseCard
            bgImage={PIC1}
            avatar={AVTAR}
            name={"Laura Aden"}
            trip={"Plan a Trip"}
          />

          <UseCaseCard
            bgImage={PIC1}
            avatar={AVTAR}
            name={"Laura Aden"}
            trip={"Plan a Trip"}
          />
        </div>
      </div>
    </section>
  );
};

export default CreativeUsecase;
