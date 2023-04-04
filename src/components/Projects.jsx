import React from "react";
import Arrows from "./Icons/Arrows";
import { projects } from "../../data";

export default function Projects() {
  return (
    <section className="py-12 mt-8 bg-[#181819] text-white rounded-b-3xl">
      <p className="mx-8 pb-3 uppercase text-[42px] font-bold border-b border-b-gray-600">
        Мої роботи
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="p-8">
          <p className="">
            Протягом року я набував крутого досвіду й краще за інших знаю, на
            чому фокусуватися, як не допустити фатальних помилок та як визначити
            маршрут та інструменти для руху вперед.
          </p>

          <a
            href="https://portfolio-next13-nnoz.vercel.app/"
            className="btn w-full uppercase big mt-8 bg-[#3E12E3] text-white"
          >
            Портфоліо
            <span className="span" />
            <Arrows />
          </a>
        </div>

        <div className="p-8 md:border-l border-l-gray-600">
          <BlackLabel />
          {projects?.slice(0, 3).map((project) => (
            <Project key={project.id} data={project} />
          ))}
        </div>

        <div className="pb-8 px-8 md:border-l border-l-gray-600">
          {projects?.slice(3, 5).map((project) => (
            <Project key={project.id} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlackLabel() {
  return (
    <div className="flex items-center p-4 rounded-3xl bg-black">
      <p className="px-4 text-3xl text-[#719CFF] font-bold">1000+</p>
      <p className="ml-4 px-8 border-l border-l-gray-600">
        годин роботи з VS Code
      </p>
    </div>
  );
}

function Project({ data }) {
  return (
    <a
      href={data.url}
      className="arrowsWrapper block mt-8 first:border-none border-t border-t-gray-600 pt-8"
    >
      <div className="imgWrapper rounded-3xl">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-between mt-4">
        <div className="text-[12px] uppercase font-bold">React</div>
        <div>
          <div className="flex justify-between gap-4">
            <h3 className="text-2xl font-bold">{data.title}</h3>
            <Arrows />
          </div>
          <p className="mt-2 text-gray-500 text-base">{data.description}</p>
        </div>
      </div>
    </a>
  );
}
