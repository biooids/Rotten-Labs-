import React from "react";
import HeaderComp from "../layoutComps/HeaderComp";
import FooterComp from "../layoutComps/FooterComp";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className=" justify-between flex flex-col p-3 gap-5">
      <HeaderComp />

      <section className="bg-red-60 min-h-screen  bg-whit">
        <Outlet />
      </section>
      <FooterComp />
    </div>
  );
}

export default MainLayout;
