import React from "react";
import { Link } from "react-router-dom";

function SideBarComp() {
  return (
    <nav className="border-2 border-green p-1   h-full flex  flex-col gap-1">
      <Link className=" border-2 border-green p-1 hover:bg-green hover:bg-opacity-20">
        Black market
      </Link>
      <Link className=" border-2 border-green p-1 hover:bg-green hover:bg-opacity-20">
        tool 2
      </Link>
      <Link className=" border-2 border-green p-1 hover:bg-green hover:bg-opacity-20">
        tool 3
      </Link>
    </nav>
  );
}

export default SideBarComp;
