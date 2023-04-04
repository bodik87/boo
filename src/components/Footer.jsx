import React from "react";

export default function Footer() {
  return (
    <div className="fixed bottom-8 left-0 right-0 -z-50 min-h-32 bg-white">
      <div>
        <a
          className="block mr-12 text-right font-bold text-sm opacity-70"
          href="#top"
        >
          Вгору
        </a>
      </div>
      <p className="font-bold text-sm text-center mt-4">
        © 2000-2023 • BOGDAN SHULKIA
      </p>
    </div>
  );
}
