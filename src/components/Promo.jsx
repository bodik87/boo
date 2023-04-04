import React from "react";
import { motion } from "framer-motion";

export default function Promo() {
  const pVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="mt-10 xl:mt- pt-4 md:pt-20 pb-14 md:pb-44 flex flex-col items-center gap-3 uppercase font-bold text-3xl md:text-[60px] lg:text-[80px] xl:text-[120px] leading-none tracking-tight text-[#141414]">
      <div className="overflow-hidden">
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          variants={pVariants}
          transition={{
            delay: 0.5,
            duration: 0.5,
            type: "tween",
          }}
        >
          Наполегливість
        </motion.div>
      </div>
      <div className="flex">
        <div className="overflow-hidden">
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            variants={pVariants}
            transition={{
              delay: 0.7,
              duration: 0.5,
              type: "keyframes",
            }}
            className="flex items-center"
          >
            <div className="mr-44 md:mr-0 xl:text-[100px] 2xl:text-[120px]">
              Уважність
            </div>
            <div className="hidden md:block ml-4 md:ml-8 text-[12px] md:text-sm xl:text-[30px] font-normal tracking-normal xl:leading-10">
              <p>Легко вчуся</p>
              <p>Системно підходжу до справи</p>
              <p>Вмію керувати своїм часом</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="overflow-hidden">
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          variants={pVariants}
          transition={{
            delay: 0.8,
            duration: 0.5,
            type: "tween",
          }}
          className="ml-44"
        >
          Відданість
        </motion.div>
      </div>
      <div className="-ml-24 md:hidden text-[12px] font-normal tracking-normal">
        <p>Легко вчуся</p>
        <p>Системно підходжу до справи</p>
        <p>Вмію керувати своїм часом</p>
      </div>
    </section>
  );
}
