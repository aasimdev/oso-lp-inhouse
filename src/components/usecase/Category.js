import React from "react";

const Category = ({text}) => {
  return (
    <>
      <div className="w-auto h-12 px-6 py-1 rounded-full border-2 border-purple-400 hover:border-transparent hover:bg-purple justify-center items-center gap-2 inline-flex text-gray-900 hover:text-white">
        <div className="text-center    text-base font-normal leading-10">
          {text}
        </div>
      </div>
    </>
  );
};

export default Category;