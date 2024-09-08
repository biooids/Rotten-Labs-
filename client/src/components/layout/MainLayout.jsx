import React from "react";
import HeaderComp from "../layoutComps/HeaderComp";
import FooterComp from "../layoutComps/FooterComp";
import { Outlet } from "react-router-dom";
import SideBarComp from "../layoutComps/SideBarComp";

function MainLayout() {
  return (
    <div className=" flex  p-3  border-2 border-green gap-3">
      <section className="w-[15%]">
        <SideBarComp />
      </section>
      <section className="flex flex-col  gap-5 w-[85%]">
        <HeaderComp />

        <section className="bg-red-60 min-h-screen  bg-whit">
          <Outlet />
        </section>
        <FooterComp />
      </section>
    </div>
  );
}

export default MainLayout;
