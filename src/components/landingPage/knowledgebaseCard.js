import React from "react";
import Link from "next/link";


const KnowledgebaseCard = ({ title, url, backgroundColor, hoverBgColor }) => {
  return (
    <>
      <Link href={url} target="_blank" className={`p-8 ${backgroundColor} ${hoverBgColor} rounded-2xl flex-col justify-between items-end gap-[38px] inline-flex`}>
        <div className="text-black text-2xl font-bold leading-9">
          {title}
        </div>
        <div className="justify-start items-center gap-4 inline-flex text-black text-base">
          <span>Read</span>
          <span className="bg-gray-40 rounded-full">
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16.5" cy="16" r="16" />
              <path d="M9.38911 16.8891L20.2069 16.8891L15.238 21.858L16.5002 23.1113L23.6113 16.0002L16.5002 8.88911L15.2469 10.1424L20.2069 15.1113L9.38911 15.1113L9.38911 16.8891Z" fill="black" />
            </svg>
          </span>
        </div>
      </Link>
    </>
  );
};

export default KnowledgebaseCard;
