import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MenuItem({ title, children }) {
  const [isMouse, toggleMouse] = useState(false);
  const toggleMouseMenu = () => toggleMouse(!isMouse);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      y: -10,
      transition: {
        duration: 0.2,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.2,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <motion.div
      onMouseEnter={toggleMouseMenu}
      onMouseLeave={toggleMouseMenu}
      className="px-2"
    >
      <a
        href="#"
        className="relative font-semibold w-fit flex items-center gap-2 py-3"
      >
        {title}
        <svg
          width={8}
          height={8}
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 6.7 4.1"
        >
          <polygon points="3.4,4.1 0,0.7 0.7,0 3.4,2.6 6,0 6.7,0.7"></polygon>
        </svg>
        <motion.div
          className="max-w-[800px] w-full fixed top-[70px] left-3 right-3 mx-auto p-3 bg-white rounded-xl shadow-lg z-50"
          initial="exit"
          animate={isMouse ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          {children}
        </motion.div>
      </a>
    </motion.div>
  );
}
