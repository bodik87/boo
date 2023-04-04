import React from "react";

export default function Burger() {
  return (
    <button className="md:hidden btn bg-white shadow-md flex-col gap-1">
      <div className="bg-[#181819] w-5 h-[2px] childDiv" />
      <div className="bg-[#181819] w-5 h-[2px] childDiv" />
      <span className="span" />
    </button>
  );
}
