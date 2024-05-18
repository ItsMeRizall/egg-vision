import React from "react";
import TableData from "../../components/TableData";
import { useEffect, useState } from "react";
import { useTokenValidation } from "../../hooks/authentication/useTokenValidation";
import { refreshToken } from "../../hooks/authentication/refreshToken";
import api from "../../lib/apiConfig.js"
import { Link, useParams } from "react-router-dom";
import SideBar from "../../components/SideBar.jsx";

const RiiwayatDetail = () => {
    const { tokenData, role, exp, userId } = refreshToken();
    const { username } = useParams();
    const columns = ["No", "Jam", "Tanggal", "Ukuran", "Kondisi"];
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useTokenValidation(tokenData, exp, role, "admin");

    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
      
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
      
        const hours = String(dateObj.getHours()).padStart(2, '0');
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
        const seconds = String(dateObj.getSeconds()).padStart(2, '0');
      
        const formattedDate = `${year}-${month}-${day}`;
        const formattedTime = `${hours}:${minutes}:${seconds}`;
      
        return { formattedDate, formattedTime };
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await api.get(`activity-users/detail/${username}`);
            const newHistory = response.data[0].activity;
            const transformedData = newHistory.map((row, index) => {
                const { formattedDate, formattedTime } = formatDate(row.date_log);
                return {
                    No: index + 1,
                    Jam: formattedTime,
                    Tanggal: formattedDate,
                    Ukuran: `${parseFloat(row.egg_length).toFixed(2)} cm x ${parseFloat(row.egg_width).toFixed(2)} cm`,
                    Kondisi: row.egg_inside
                };
            });
            setData(transformedData);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userId) {
            fetchData();
        }
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
      <>
        <div className="flex h-screen">
          <div className="main w-full p-12">
            <div className="flex items-center justify-between">
              <Link to={"/"}>
                <h3 className="font-bold text-base">EGG VISION</h3>
              </Link>
  
              <form class="">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-[#DCDCDC] "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="bg-[#A3A3A3] text-[#DCDCDC] block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 "
                    placeholder="Search"
                    required
                  />
                  {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                </div>
              </form>
            </div>
  
            <div className="flex mt-5 justify-center">
              <TableData
              unduh= {true}
                columns={columns}
                data={data}
                title="Riwayat Aktivitas"
              />
            </div>
          </div>
          <div className="side w-1/4">
            <SideBar />
          </div>
        </div>
      </>
    );
  };

export default RiiwayatDetail;
