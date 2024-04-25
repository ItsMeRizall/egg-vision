import React from "react";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import Person from "../assets/person.svg"

export default function Navbar({users}) {
    return (
        <div className="flex bg-transparent justify-between items-center text-[#3E0000]">
            <div>
                <Link to={'/'}>
                    <h3 className="font-bold text-base">EGG VISION</h3>
                </Link>
            </div>
            <div className="flex gap-5">
                <NavLink children={'Anlisisis'} href={'/analytic'}/>
                <NavLink children={'Riwayat'} href={''}/>
            </div>
            <div className="flex items-center font-medium gap-4">
                <div className="flex items-center gap-3 text-base">
                    <p>{users}</p>
                    <img className="w-10" src={Person} alt="icon" />
                </div>
                <a href="/" className="px-9 py-2 border-[#3E0000] border-2 rounded-xl hover:text-white hover:bg-[#3E0000]">Logout</a>
            </div>
        </div>
    )
}