import React, { useRef, useState } from "react";
import Logo from "./Header/Logo";
import Menu from "./Header/Menu/Menu";
import Contacts from "./Header/Contacts";
import Burger from "./Header/Burger";
import {
  useMotionValueEvent,
  motion,
  useScroll,
  useMotionValue,
} from "framer-motion";

export default function Header() {
  const [scrollUp, setScrollUp] = useState(false);
  const [transparent, setTransparent] = useState(true);

  const { scrollY } = useScroll();
  const Y = useMotionValue(0);

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
      className={`${scrollUp ? "" : "-translate-y-full"} ${
        transparent ? "bg-transparent" : "bg-white shadow-md"
      } fixed top-0 left-0 w-full transition-all duration-300 px-4 md:px-12 py-4 flex items-center justify-between whitespace-nowrap z-40`}
    >
      <Logo />
      <Menu />
      <div className="flex items-center gap-2">
        <Contacts />
        <Burger />
      </div>
    </header>
  );
}
