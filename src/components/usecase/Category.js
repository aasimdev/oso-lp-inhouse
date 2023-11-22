import React from "react";

const Category = ({ category, active, handleFilter }) => {
  const { name, value } = category;
  return (
    <>
      <button
        className={`w-auto h-12 px-6 py-1 rounded-full border-2 border-purple-400 hover:border-transparent hover:bg-purple ${
          active === value ? "bg-purple text-white" : "text-gray-900 "
        } justify-center items-center gap-2 inline-flex text-gray-900 hover:text-white"`}
        onClick={() => handleFilter(value)}
      >
        <div className="text-center text-base font-normal leading-10">
          {name}
        </div>
      </button>
    </>
  );
};

export default Category;
