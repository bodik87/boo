import React from "react";
import MenuItem from "./MenuItem";
import Very from "./Items/Very";
export default function Menu() {
  return (
    <div className="hidden md:flex">
      <MenuItem title="Дуже">
        <Very />
      </MenuItem>
      <p className="relative font-semibold w-fit flex items-center gap-2 py-3">
        хочу у вас працювати !
      </p>
    </div>
  );
}
