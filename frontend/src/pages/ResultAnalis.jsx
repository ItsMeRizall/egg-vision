import React from "react";
import Navbar from "../components/NavBar";
import Vector from "../assets/Vector.png";
import { useLocation } from "react-router-dom";

export default function ResultAnalis(){
    return(
        <>
        <div className="flex flex-col h-screen px-16 py-4 overflow-hidden">
            <Navbar users={"Rayhan Gaming"}/>
            <div className="flex justify-center font-bold text-5xl mt-12">
            <h1>Hasil Analisis</h1>
            </div>
            <div className="flex justify-around mt-10">
                <img className="w-[400px] bg-cover object-contain" src={"http://127.0.0.1:5000/images/image/output/output_image_20240425231441.jpg"} alt="" />
                <img className="w-[400px] bg-cover object-contain" src={Vector} alt="" />
            </div>
            <div className="flex justify-center mt-10">
                <div className="table w-[100px] font-bold">
                <tr>
                    <td>Ukuran</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Kondisi</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fertile</td>
                    <td>-</td>
                </tr>
                </div>
            </div>
        </div>
        </>
    )
}