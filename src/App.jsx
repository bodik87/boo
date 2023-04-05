import React from "react";
import Header from "./components/Header";
import Promo from "./components/Promo";
import { Video } from "./components/Video";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#D2D7F0] mb-28 rounded-b-3xl overflow-x-hidden">
      <Header />
      <Promo />
      <Video />
      <Projects />
      <Footer />
    </div>
  );
}
