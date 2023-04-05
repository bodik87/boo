import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const pVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0 },
};

export default function Promo() {
  const { scrollY } = useScroll();
  const moveRight = useTransform(scrollY, [0, 100], [0, 100], {
    clamp: false,
  });
  const moveLeft = useTransform(scrollY, [0, 100], [100, 0], { clamp: false });
  const springRight = useSpring(moveRight, {
    stiffness: 100,
    damping: 30,
  });
  const springLeft = useSpring(moveLeft, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section className="pt-28 md:pt-32 pb-14 md:pb-32 flex flex-col items-center gap-3 uppercase font-bold text-3xl md:text-[60px] lg:text-[80px] xl:text-[120px] leading-none tracking-tight text-[#141414]">
      <motion.div
        style={{ translateX: springLeft }}
        className="overflow-hidden -ml-[200px]"
      >
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
      </motion.div>

      <motion.div style={{ translateX: springRight }} className="flex">
        <div className="overflow-hidden -ml-[60px]">
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
            <div className="xl:text-[100px] 2xl:text-[120px]">Уважність</div>
            <div className="hidden md:block ml-4 md:ml-8 text-[12px] md:text-sm xl:text-[30px] font-normal tracking-normal xl:leading-10">
              <p>Легко вчуся</p>
              <p>Системно підходжу до справи</p>
              <p>Вмію керувати своїм часом</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        style={{ translateX: springLeft }}
        className="overflow-hidden -ml-[160px]"
      >
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          variants={pVariants}
          transition={{
            delay: 0.8,
            duration: 0.5,
            type: "tween",
          }}
        >
          Відданість
        </motion.div>
      </motion.div>
      <div className="mt-10 md:hidden text-[12px] font-normal tracking-normal">
        <p>Легко вчуся</p>
        <p>Системно підходжу до справи</p>
        <p>Вмію керувати своїм часом</p>
      </div>
    </section>
  );
}
