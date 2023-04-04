import React from "react";

export default function Contacts() {
  return (
    <div className="flex items-center gap-4">
      <div className="hidden lg:block">
        <p className="font-semibold">067 278 5349</p>
        <p className="text-[12px]">Безкоштовно по Україні</p>
      </div>
      <button className="btn bg-[#181819] text-white text-[12px]">
        Зв'язатися зі мною
        <span className="span" />
      </button>
    </div>
  );
}
