import React from "react";
import Link from "next/link";


const KnowledgebaseCard = ({title , url}) => {
  return (
    <>
      <div className="max-w-[347px] h-[242px] p-8 bg-white rounded-2xl border border-gray-30 flex-col justify-start items-end gap-[38px] inline-flex">
        <div className="text-black text-2xl font-bold leading-9">
          {title}
        </div>
        <Link href={url} target="_blank" className="justify-start items-center gap-4 inline-flex">
          <div className="text-black text-base font-normal">
            Read
          </div>
          <div className="w-8 h-8 relative">
            <div className="w-8 h-8 left-0 top-0 absolute bg-gray-40 rounded-full" />
            <div className="w-[21.33px] h-[21.33px] absolute top-1 left-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M3.88911 11.8891L14.7069 11.8891L9.738 16.858L11.0002 18.1113L18.1113 11.0002L11.0002 3.88911L9.74689 5.14244L14.7069 10.1113L3.88911 10.1113L3.88911 11.8891Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default KnowledgebaseCard;
