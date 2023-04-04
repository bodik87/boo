import React from "react";
import ReactIcon from "./Icons/ReactIcon";
import TSIcon from "./Icons/TSIcon";
import NextIcon from "./Icons/NextIcon";

export default function Very() {
  return (
    <div className="flex flex-col px-6 pt-6 pb-4">
      <div className="flex gap-8">
        <div className="menuItemWrapper w-2/3">
          <Arrows />
          <h2>Люблю розробку</h2>
        </div>

        <div className="menuItemWrapper">
          <Arrows />
          <h2 className="w-1/3">Подобається кодити</h2>
        </div>
      </div>

      <div className="menuItemWrapper mt-12">
        <Arrows />
        <h2>Наполегливо вивчаю</h2>
      </div>
      <div className="flex gap-4 mt-4">
        <ReactIcon />
        <TSIcon />
        <NextIcon />
      </div>
    </div>
  );
}

function Arrows() {
  return (
    <div className="roundedIcon">
      <div className="innerIconContent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-4 h-4 arrow"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-4 h-4 arrow"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
}
