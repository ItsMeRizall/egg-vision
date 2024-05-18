import React, {useState} from "react";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import Person from "../assets/person.svg"
import { refreshToken } from "../hooks/authentication/refreshToken";
import { useTokenValidation } from "../hooks/authentication/useTokenValidation";
import { logout } from "../hooks/authentication/logout.js"
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Navbar({users}) {
    const {out} = logout();
    const {tokenData, exp} = refreshToken()
    useTokenValidation(tokenData, exp);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
<div className="bg-transparent text-[#3E0000] z-20">
      <div className="flex justify-between items-center p-4 vm:p-5">
        <Link to={'/home'}>
          <h3 className="font-bold text-xl">EGG VISION</h3>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex gap-5">
          <NavLink children={'Analisis'} href={'/analytic'} />
          <NavLink children={'Riwayat'} href={'/user-riwayat'} />
        </div>
        <div className="hidden md:flex items-center font-medium gap-4">
          <div className="flex items-center gap-3 text-base">
            <p>{users}</p>
            <img className="w-10" src={Person} alt="icon" />
          </div>
          <button onClick={out} className="px-9 py-2 border-[#3E0000] border-2 rounded-xl hover:text-white hover:bg-[#3E0000]">
            Logout
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed flex right-2 mr-3 flex-col items-start gap-5 justify-center bg-cyan-400 ">
          <NavLink children={'Analisis'} href={'/analytic'} />
          <NavLink children={'Riwayat'} href={'/user-riwayat'} />
          <div className="flex items-center font-medium gap-4 flex-col">
            <div className="flex items-center gap-3 text-base">
              <p>{users}</p>
              <img className="w-10" src={Person} alt="icon" />
            </div>
            <button onClick={out} className="px-9 py-2 border-[#3E0000] border-2 rounded-xl hover:text-white hover:bg-[#3E0000]">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};