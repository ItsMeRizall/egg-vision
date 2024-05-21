import React, {useEffect, useState} from "react";
import Navbar from "../../components/NavBar.jsx";
import Vector from "../../assets/Vector.png";
import { useLocation, useNavigate } from "react-router-dom";
import { refreshToken } from "../../hooks/authentication/refreshToken.js";
import { useTokenValidation } from "../../hooks/authentication/useTokenValidation.js";

export default function ResultAnalis() {
    const { tokenData, username, exp , role} = refreshToken();
    useTokenValidation(tokenData, exp, role , "pegawai");
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log("useEffect called");
        if (!location.state || !location.state.data) {
            navigate(-1); // Navigate back to the previous page
        } else {
            setData(location.state.data);
        }
    }, []);

    if (!data) {
        return null; // Render nothing or a fallback UI
    }

    console.log("hasilnya" , data)

    return (
        <>
            <div className="flex flex-col h-screen px-16 overflow-hidden">
                <Navbar users={username} />
                <div className="flex justify-center font-bold text-5xl mt-12 vm:items-center vm:mt-5 md:px-14">
                    <h1>Hasil Analisis</h1>
                </div>
                <div className="flex justify-around mt-10 vm:flex-col vm:gap-5">
                    <img className="w-[400px] bg-cover object-contain" src={`http://localhost:5000/${data.original_image}`} alt="" />
                    <img className="w-[400px] bg-cover object-contain" src={`http://localhost:5000/${data.output_image}`} alt="" />
                </div>
                <div className="flex justify-center mt-10">
                    <table className="font-bold">
                        <tbody>
                            <tr>
                                <td>Ukuran : </td>
                                <td>{data.egg_info[0].predicted_length.toFixed(2)} Cm x {data.egg_info[0].predicted_width.toFixed(2)} Cm</td>
                            </tr>
                            <tr>
                                <td>Kondisi : </td>
                                <td>{data.egg_info[0].class}</td>
                            </tr>
                            <tr>
                                <td>Grade : </td>
                                <td>{data.egg_info[0].grade}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
