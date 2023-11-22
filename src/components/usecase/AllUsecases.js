import React from "react";
import PIC1 from "../../../public/assets/newpage/Image1.png";
import usecaseImage from "../../../public/assets/usecase/usecase1.png";
import AVTAR from "../../../public/assets/newpage/avtar.svg";
import UseCaseCard from "../usecaseCard/index";

const AllUsecases = ({ videoData }) => {
  const image = usecaseImage;

  return (
    <section className="py-6 sm:py-8 mx-auto max-w-6xl">
      <div className="flex flex-col gap-2">
        <div className="max-w-6xl flex flex-col">
          <div className="px-6 max-w-6xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {videoData.map((v, i) => {
              return (
                <UseCaseCard
                  bgImage={image}
                  avatar={AVTAR}
                  key={i}
                  name={"Laura Aden"}
                  trip={"Plan a Trip"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllUsecases;
