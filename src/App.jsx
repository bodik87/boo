import React, { useState } from "react";
import Header from "./components/Header";
import Promo from "./components/Promo";
import { Video } from "./components/Video";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";

export default function App() {
  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <div className="bg-[#D2D7F0] mb-28 rounded-b-3xl overflow-x-hidden">
      <BurgerMenu visibleMenu={visibleMenu} setVisibleMenu={setVisibleMenu} />
      <Header setVisibleMenu={setVisibleMenu} />
      <Promo />
      <Video />
      <Projects />
      <Footer />
    </div>
  );
}
