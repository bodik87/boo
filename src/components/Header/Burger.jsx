import { transform } from "framer-motion";
import React, { useState } from "react";
import Logo from "./Logo";

export default function Burger() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const closeModal = () => setVisibleMenu(!visibleMenu);
  console.log(visibleMenu);
  return (
    <>
      <button
        onClick={() => setVisibleMenu(!visibleMenu)}
        className="md:hidden btn bg-white shadow-md flex-col gap-1"
      >
        <div className="bg-[#181819] w-5 h-[2px] childDiv" />
        <div className="bg-[#181819] w-5 h-[2px] childDiv" />
        <span className="span" />
      </button>
      {/* Mobile burger-menu */}
      <div
        onClick={closeModal}
        className={`${
          visibleMenu ? "translate-x-0" : "translate-x-full"
        } flex flex-col py-6 px-4 items-center gap-4 h-full fixed bottom-0 right-0 z-20 bg-black text-white transition-all`}
      >
        <div className="flex justify-between items-center border-b border-gray-500 pb-6">
          <Logo color="white" />
          <button
            onClick={() => setVisibleMenu(!visibleMenu)}
            className="btn bg-[#3e12e3] shadow-md flex-col gap-1"
          >
            <span className="span" />
            <div className="bg-white w-5 h-[2px] childDiv rotate-45 translate-y-[3px]" />
            <div className="bg-white w-5 h-[2px] childDiv -rotate-45 -translate-y-[3px]" />
          </button>
        </div>
        <div className="font-bold">Богдан Шуліка</div>
        <a className="mt-12 flex gap-4" href="tel:+380672785349">
          <span>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M2.59 1.322l2.844-1.322 4.041 7.889-2.724 1.342c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-.598.273-1.215.399-1.842.397-5.649-.019-12.086-10.43-12.133-17.33-.016-2.407.745-4.387 2.59-5.348zm1.93 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.972-.474-2.271-4.383-1.026.501c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.498-2.252-4.398zm15.48 14.404h-1v-13h1v13zm-2-2h-1v-9h1v9zm4-1h-1v-7h1v7zm-6-1h-1v-5h1v5zm-2-1h-1v-3h1v3zm10 0h-1v-3h1v3zm-12-1h-1v-1h1v1z"
                fill="white"
              />
            </svg>
          </span>
          067 278 53 49{" "}
        </a>
        <span>bsshul@gmail.com</span>
        <a className="block mt-auto" href="https://github.com/bodik87">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <div
        onClick={closeModal}
        className={`fixed inset-0 z-10 bg-[#3e12e3] opacity-90 ${
          visibleMenu ? "block opacity-90" : "hidden opacity-0"
        } transition-opacity`}
      />
    </>
  );
}
