import React from "react";
import { Link } from "react-router-dom";

import { GiFizzingFlask } from "react-icons/gi";
import { MdNotificationAdd } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { RiMessage2Fill } from "react-icons/ri";
import { GiChewedSkull } from "react-icons/gi";
import { IoEyeSharp } from "react-icons/io5";
import { MdOtherHouses } from "react-icons/md";
import { IoMdQrScanner } from "react-icons/io";

import { GiEvilEyes } from "react-icons/gi";

function HeaderComp() {
  return (
    <div className=" p-3 border-green border-b-2 flex justify-between items-center ">
      <div className="text-2xl flex justify-center items-center gap-3">
        <GiFizzingFlask />
        <p> Rotten Labs</p>
      </div>

      <div className="flex gap-3">
        <Link className=" hover:text-cyan-500 p-1 border-2 border-green rounded-lg flex flex-col justify-center items-center">
          <div className="flex gap-1">
            <IoMdQrScanner className="text-xl" />{" "}
            <span className="text-xs"></span>
          </div>
          <p className="text-xs">Visit Labs</p>
        </Link>{" "}
        <Link className=" hover:text-cyan-500 p-1 border-2 border-green rounded-lg flex flex-col justify-center items-center">
          <div className="flex gap-1">
            <MdOtherHouses className="text-xl" />{" "}
            <span className="text-xs"></span>
          </div>
          <p className="text-xs">My Labs</p>
        </Link>{" "}
      </div>
      <div className="flex gap-3  justify-center items-center ">
        <Link className=" hover:text-cyan-500 p-1 border-2 border-green rounded-lg flex flex-col justify-center items-center">
          <div className="flex gap-1">
            <GiBrain className="text-xl" /> <span className="text-xs">10+</span>
          </div>
          <p className="text-xs">Think</p>
        </Link>

        <Link className=" hover:text-cyan-500 p-1 border-2 border-green rounded-lg flex flex-col justify-center items-center">
          <div className="flex gap-1">
            {" "}
            <RiMessage2Fill className="text-xl" />{" "}
            <span className="text-xs">10+</span>
          </div>{" "}
          <p className="text-xs">Chat</p>
        </Link>

        <Link className=" hover:text-cyan-500 p-1 border-2 border-green rounded-lg flex flex-col justify-center items-center">
          <div className="flex gap-1">
            <FaNewspaper className="text-xl" />{" "}
            <span className="text-xs">10+</span>
          </div>
          <p className="text-xs">News</p>
        </Link>
      </div>
      <Link className=" hover:text-cyan-500 p-1 border-2 border-green rounded-lg flex flex-col justify-center items-center">
        <div className="flex gap-1">
          <GiChewedSkull />

          <span className="text-xs"></span>
        </div>
        <p className="text-xs">Reception</p>
      </Link>
    </div>
  );
}

export default HeaderComp;
