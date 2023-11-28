import React from "react";
import Image from "next/image";
import ShortVideo from "../usecase/ShortVideo";

const UseCaseCard = ({ videoId, category, title }) => {
  return (
    <div className="max-w-[347px] h-[580px] rounded-2xl border border-gray-50">
      <div className="">
        <ShortVideo videoId={videoId} />
      </div>
      <div className="p-6 justify-start items-center gap-2 inline-flex">
        <div className="grow shrink basis-0 text-black text-base font-semibold leading-normal">
          {title}
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard;
