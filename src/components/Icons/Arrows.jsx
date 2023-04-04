import React from "react";

export default function Arrows() {
  return (
    <div className="ml-4 w-4 h-4 relative overflow-hidden">
      <svg
        focusable="false"
        viewBox="0 0 16 16"
        fill="white"
        className="w-4 h-4 absolute top-0 right-0 icon"
      >
        <path d="M15.9998 14.9998V0.999513V-0.000488281H14.9998H0.9998L0.999801 1.99951L12.5861 1.99951L0.292969 14.2927L1.70718 15.7069L13.9998 3.41425V14.9998H15.9998Z"></path>
      </svg>

      <svg
        focusable="false"
        viewBox="0 0 16 16"
        fill="white"
        className="w-4 h-4 absolute bottom-0 left-0 icon2"
      >
        <path d="M15.9998 14.9998V0.999513V-0.000488281H14.9998H0.9998L0.999801 1.99951L12.5861 1.99951L0.292969 14.2927L1.70718 15.7069L13.9998 3.41425V14.9998H15.9998Z"></path>
      </svg>
    </div>
  );
}
