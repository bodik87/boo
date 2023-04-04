import React from "react";
import Logo from "./Header/Logo";
import Menu from "./Header/Menu/Menu";
import Contacts from "./Header/Contacts";
import Burger from "./Header/Burger";

export default function Header() {
  return (
    <header className="px-4 md:px-12 pt-4 flex items-center justify-between whitespace-nowrap">
      <Logo />
      <Menu />
      <div className="flex items-center gap-2">
        <Contacts />
        <Burger />
      </div>
    </header>
  );
}
