import React from "react";
import Door from "./Door";
import CryptoPrices from "./CryptoPrices";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex justify-between">
        <form action="" className="  flex flex-col gap-3 ">
          <div className="flex gap-1 justify-center items-center">
            <input
              id="code"
              name="code"
              type="search"
              className="p-1 font-orbitron font-bold w-full focus:outline-none focus:ring-0 border-none bg-green bg-opacity-20 placeholder-green "
              placeholder="Labs Search"
              required
            />
            {/* <IoMdQrScanner className="text-3xl" /> */}
          </div>
          <button
            type="submit"
            className="border-2 border-green hover:bg-green hover:bg-opacity-20 font-orbitron font-bold "
          >
            Search
          </button>
        </form>
        <nav className="p-1">
          <ul className="flex  justify-between w-full gap-3 font-orbitron">
            <li className="hover:underline cursor-pointer font-orbitron font-bold">
              Public
            </li>
            <li className="hover:underline cursor-pointer font-orbitron font-bold">
              Private
            </li>
            <li className="hover:underline cursor-pointer font-orbitron font-bold">
              Saved
            </li>
            <li className="hover:underline cursor-pointer font-orbitron font-bold">
              More
            </li>
          </ul>
        </nav>

        <div className=" ">
          <Link className="border-2 p-1 border-green hover:bg-green hover:bg-opacity-20 font-orbitron font-bold ">
            Find Crypto Prices
          </Link>
        </div>
      </div>
      <h1 className="font-orbitron font-bold  text-5xl">
        Those are Rotten Labs :
      </h1>
      <section className="home-grid gap-5">
        <Door />
        <Door />
        <Door />
        <Door />
        <Door />
        <Door />
        <Door />
        <Door />
        <Door />
        <Door />
        <Door />
        <Door />
        <Door />
        <Door />
      </section>
    </section>
  );
}

export default Home;
