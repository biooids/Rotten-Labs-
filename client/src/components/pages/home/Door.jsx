import React from "react";
import { Link } from "react-router-dom";
import { IoMdQrScanner } from "react-icons/io";
import { GiDaemonSkull } from "react-icons/gi";

function Door() {
  return (
    <div className="h-[350px] border-2   border-green p-1 flex flex-col justify-between door">
      <div className=" border-2 border-green text-sm flex flex-col justify-center items-center gap-1 p-1">
        <GiDaemonSkull className="text-3xl" />
        <p className="line-clamp-1 text-center">
          Lorem ipsum dolor, sit ametsadds Lorem ipsum dolor, sit amet
          consectetur adipisicing elit.
        </p>
      </div>
      <div>
        <p className="text-xs">Room: 567HNMY7</p>
      </div>
      <div className=" border- border-green  p-1 text-xs flex flex-col gap-1">
        <p>Rules :</p>
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          aperiam fuga iste sdsadds
        </p>
      </div>

      <div
        htmlFor="code"
        className="text-xs flex gap-1  items-center justify-around"
      >
        <p>Pass Code : </p>
        <p>ROTT12R</p>
        <button className="p-1 border-2 rounded-md hover:bg-green hover:bg-opacity-20 border-green">
          Free
        </button>
      </div>
      <form action="" className="flex flex-col gap-1 justify-center ">
        <div className="flex gap-1 justify-center items-center">
          <input
            id="code"
            name="code"
            type="text"
            className="p-1 w-full focus:outline-none focus:ring-0 bg-green bg-opacity-20 placeholder-green "
            placeholder="Enter Pass Code"
            required
          />
          <IoMdQrScanner className="text-3xl" />
        </div>
        <div className="grid grid-cols-2 gap-1">
          <button
            type="submit"
            className="border-2 border-green hover:bg-green hover:bg-opacity-20 "
          >
            Enter
          </button>
          <button
            type="button"
            className="border-2 border-green hover:bg-green hover:bg-opacity-20 "
          >
            Save
          </button>
        </div>
      </form>
      <div className="flex justify-between items-center text-xs">
        <p>Visits: 123</p>
        <p>R : 4.5</p>
      </div>
    </div>
  );
}

export default Door;
