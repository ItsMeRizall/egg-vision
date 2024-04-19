import React from "react";
import NavLink from "./NavLink";
import Person2 from "../assets/person2.svg";
import Home from "../assets/home.svg";
import History from "../assets/history.svg";
import Logout from "../assets/logout.svg";

const SideBar = () => {
  return (
    <div className="flex flex-col bg-[#3E0000] h-full text-center text-white justify-between">
      <div className="flex flex-col justify-end ">
        <div>
          <h3 className="font-bold text-lg m-8">Admin Panel</h3>
        </div>
        <div className="flex p-6 hover:bg-white justify-end hover:cursor-pointer">
          <NavLink
            href={"/analytic"}
            children={"Dashboard"}
            childimg={Home}
            reverse={true}
          />
        </div>
        <div className="flex p-5 hover:bg-white justify-end hover:cursor-pointer">
          <NavLink
            href={"/analytic"}
            children={"Users"}
            childimg={Person2}
            reverse={true}
          />
        </div>
        <div className="flex p-5 hover:bg-white justify-end hover:cursor-pointer">
          <NavLink
            href={"/analytic"}
            children={"Riwayat"}
            childimg={History}
            reverse={true}
          />
        </div>
      </div>
      <div className="flex p-5 justify-end hover:cursor-pointer">
        <NavLink
          href={"/analytic"}
          children={"Logout"}
          childimg={Logout}
          reverse={true}
        />
      </div>
    </div>
  );
};

export default SideBar;
