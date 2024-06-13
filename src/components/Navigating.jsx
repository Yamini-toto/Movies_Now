import React from "react";

const Navigating = ({ next, prev, pageNum }) => {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center">
      <div className="px-8">
        <i className="uil uil-arrow-left" onClick={prev}></i>
      </div>
      <div className="font-bold">{pageNum}</div>
      <div className="px-8">
        <i className="uil uil-arrow-right" onClick={next}></i>
      </div>
    </div>
  );
};

export default Navigating;
