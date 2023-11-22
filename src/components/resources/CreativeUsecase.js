import React from "react";
import UseCaseCard from "../usecaseCard/index";
import PIC1 from "../../../public/assets/newpage/Image1.png";
import AVTAR from "../../../public/assets/newpage/avtar.svg";

const CreativeUsecase = () => {
  const handleClick = () => {};

  return (
    <section className="sm:mt-8 pt-4 mx-auto max-w-6xl">
      <div className="px-6 flex flex-col md:gap-4 gap-2">
        <h1 className="text-[40px] md:text-5xl md:text-center font-bold md:font-extrabold leading-[56px] md:leading-[64px] text-black">
          Creative ways to use OSO
        </h1>
      </div>
      <div className="max-w-6xl flex flex-col pt-6">
        <div className="mx-6 max-w-6xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
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
