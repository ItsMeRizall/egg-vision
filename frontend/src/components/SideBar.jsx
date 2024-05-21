import React from "react";
import NavLink from "./NavLink";
import Person2 from "../assets/person2.svg";
import Home from "../assets/home.svg";
import History from "../assets/history.svg";
import Logout from "../assets/logout.svg";
import { logout } from "../hooks/authentication/logout";

const SideBar = () => {
  const {out} = logout();
  return (
    <div className="flex flex-col bg-[#3E0000] h-full text-center text-white justify-between">
      <div className="flex flex-col justify-end ">
        <div>
          <h3 className="font-bold text-lg m-8">Admin Panel</h3>
        </div>
        <div className="flex p-6 hover:bg-[#3e0000b6] justify-end hover:cursor-pointer">
          <NavLink
            href={"/dashboard"}
            children={"Dashboard"}
            childimg={Home}
            reverse={true}
          />
        </div>
        <div className="flex p-5 hover:bg-[#3e0000b6] justify-end hover:cursor-pointer">
          <NavLink
            href={"/dashboard/admin"}
            children={"Users"}
            childimg={Person2}
            reverse={true}
          />
        </div>
        <div className="flex p-5 hover:bg-[#3e0000b6] justify-end hover:cursor-pointer">
          <NavLink
            href={"/riwayat"}
            children={"Riwayat"}
            childimg={History}
            reverse={true}
          />
        </div>
      </div>
      <div className="flex p-5 justify-end hover:cursor-pointer">

        <button onClick={out} className="flex items-center gap-5">
          Logout <span><img src={Logout} alt="Logout" className="w-8"/></span>
        </button>
        
      </div>
    </div>
  );
};

export default SideBar;
