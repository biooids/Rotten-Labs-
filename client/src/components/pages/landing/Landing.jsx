import React, { useRef, useEffect } from "react";

import landing from "../../../assets/landing.jpg";
import landing2 from "../../../assets/landing2.webp";

import smoke from "../../../assets/smoke.mp4";
import smoke2 from "../../../assets/smoke2.webm";

import { GiFizzingFlask } from "react-icons/gi";
import { FaBiohazard } from "react-icons/fa";
import { GiChewedSkull } from "react-icons/gi";
import { FaBookSkull } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="h-screen relative flex justify-center items-center">
      <div className="w-full h-full absolute z-0">
        <picture>
          <source
            srcSet={landing}
            type="image/webp"
            className="object-cover w-full h-full absolute"
          />
          <img
            src={landing2}
            alt="description"
            className="object-cover w-full h-full absolute"
          />
        </picture>

        <video
          className="object-cover w-full h-full absolute opacity-30"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={smoke2} type="video/webm" />
          <source src={smoke} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="z-50 relative bg-black bg-opacity-70 max-w-[800px] min-h-[300px] p-5 justify-between flex items-center flex-col rounded-lg backdrop-blur-sm">
        <p className="text-7xl font-bold text-center">Rotten Labs</p>
        <div className="text-5xl font-bold flex">
          <FaBiohazard />
          <GiChewedSkull />
          <GiFizzingFlask />
          <GiChewedSkull />
          <FaBiohazard />
        </div>
        <p className="text-center">
          A place where the whispers of the past collide with the horrors of the
          unknown. Dare to step inside, where what is broken may never heal...
          and what is found can never be unseen.
        </p>

        <Link
          to="/home"
          className="flex justify-center items-center p-1 gap-2 border-2 border-green-500 rounded-lg"
        >
          <FaBookSkull />
          <p>Enter</p>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
