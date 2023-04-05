import React, { useState } from "react";
import Logo from "./Header/Logo";
import Menu from "./Header/Menu/Menu";
import Contacts from "./Header/Contacts";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function Header({ setVisibleMenu }) {
  const [scrollUp, setScrollUp] = useState(true);
  const [transparent, setTransparent] = useState(true);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previousScrollY = scrollY.getPrevious();
    if (latest > previousScrollY && scrollY.current > 15) {
      setScrollUp(false);
    } else {
      setScrollUp(true);
    }

    if (scrollY.current < 20) {
      setTransparent(true);
    } else {
      setTransparent(false);
    }
  });

  return (
    <header
      className={`${!scrollUp && "-translate-y-full"} ${
        transparent ? "bg-transparent" : "bg-white shadow-md"
      } fixed top-0 left-0 w-full transition-all duration-300 px-4 md:px-12 py-4 flex items-center justify-between whitespace-nowrap z-20`}
    >
      <Logo />
      <Menu />
      <div className="flex items-center gap-2">
        <Contacts />
        <button
          onClick={() => setVisibleMenu(true)}
          className="md:hidden btn bg-white shadow-md flex-col gap-1"
        >
          <div className="bg-[#181819] w-5 h-[2px] childDiv" />
          <div className="bg-[#181819] w-5 h-[2px] childDiv" />
          <span className="span" />
        </button>
      </div>
    </header>
  );
}
