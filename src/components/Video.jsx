import { useMotionValueEvent, useScroll } from "framer-motion";
import videoBg from "/video.mp4";
import { useState } from "react";

export const Video = () => {
  let h = 400;
  const [height, setHeight] = useState(h);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (scrollY.current < 550) {
      let x = h - Math.round(latest / 2);
      setHeight(x);
    }
  });

  return (
    <section
      style={{ height: `${height}px` }}
      className="w-full h-32 mb-2 flex justify-center items-center relative"
    >
      <a href="https://t.me/bodik_87" className="blueCircle">
        <span className="messege w-10 h-10 relative overflow-hidden">
          <FirstTelegramIcon />
          <SecondTelegramIcon />
        </span>
        <span className="mt-1">Telegram</span>
      </a>

      <video
        className="w-full h-full rounded-3xl object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      />
    </section>
  );
};

function FirstTelegramIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 543 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-2 right-2 icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.3284 193.722C183.089 130.217 280.285 88.35 328.917 68.1222C467.773 10.3674 496.625 0.334815 515.431 0.00353222C519.568 -0.0693298 528.816 0.95574 534.806 5.8167C539.865 9.92121 541.257 15.4658 541.923 19.3573C542.589 23.2488 543.418 32.1138 542.759 39.0407C535.234 118.102 502.675 309.965 486.111 398.515C479.102 435.984 465.301 448.548 451.941 449.777C422.905 452.449 400.856 430.588 372.733 412.153C328.727 383.306 303.866 365.349 261.15 337.2C211.784 304.669 243.786 286.789 271.919 257.569C279.282 249.921 407.215 133.556 409.691 123C410.001 121.68 410.288 116.759 407.365 114.16C404.441 111.562 400.126 112.45 397.012 113.157C392.599 114.159 322.298 160.625 186.11 252.556C166.155 266.259 148.081 272.935 131.887 272.585C114.034 272.199 79.6928 262.491 54.1636 254.192C22.8511 244.014 -2.03552 238.632 0.131547 221.346C1.26029 212.343 13.6592 203.135 37.3284 193.722Z"
        fill="white"
      />
    </svg>
  );
}

function SecondTelegramIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 543 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-2 right-2 icon2"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.3284 193.722C183.089 130.217 280.285 88.35 328.917 68.1222C467.773 10.3674 496.625 0.334815 515.431 0.00353222C519.568 -0.0693298 528.816 0.95574 534.806 5.8167C539.865 9.92121 541.257 15.4658 541.923 19.3573C542.589 23.2488 543.418 32.1138 542.759 39.0407C535.234 118.102 502.675 309.965 486.111 398.515C479.102 435.984 465.301 448.548 451.941 449.777C422.905 452.449 400.856 430.588 372.733 412.153C328.727 383.306 303.866 365.349 261.15 337.2C211.784 304.669 243.786 286.789 271.919 257.569C279.282 249.921 407.215 133.556 409.691 123C410.001 121.68 410.288 116.759 407.365 114.16C404.441 111.562 400.126 112.45 397.012 113.157C392.599 114.159 322.298 160.625 186.11 252.556C166.155 266.259 148.081 272.935 131.887 272.585C114.034 272.199 79.6928 262.491 54.1636 254.192C22.8511 244.014 -2.03552 238.632 0.131547 221.346C1.26029 212.343 13.6592 203.135 37.3284 193.722Z"
        fill="white"
      />
    </svg>
  );
}
