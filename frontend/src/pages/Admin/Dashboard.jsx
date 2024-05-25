import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import { Link } from "react-router-dom";
import BarChart from "../../lib/utils/BarChart";
import DoughnutChart from "../../lib/utils/DoughnutChart";
import activity from "../../hooks/activity/activity";
import { refreshToken } from "../../hooks/authentication/refreshToken";
import { useTokenValidation } from "../../hooks/authentication/useTokenValidation";

const Dashboard = () => {
  const {tokenData, username, exp, role} = refreshToken()
  useTokenValidation(tokenData, username, role, 'admin');
  const [data, setData] = useState([]);
  const [dataGrade, setDataGrade] = useState([]);
  const [dataActivityInWeek, setDataActivityinWeek] = useState([]);
  const { totalEggCondition , totalGrade, activitiyInWeek} = activity();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await totalEggCondition();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    const getDataGrade = async () => {
      try {
        const response = await totalGrade();
        setDataGrade(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    const getActivityInWeek = async () => {
      try {
        const response = await activitiyInWeek();
        setDataActivityinWeek(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getDataGrade();
    fetchData();
    getActivityInWeek();
  },[])


  return (
    <div className="flex relative">
      <div className="main w-full p-12 flex-col vm:p-5">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <h3 className="font-bold text-2xl">EGG VISION</h3>
          </Link>

          <form className="vm:hidden">
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
              {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
            </div>
          </form>
        </div>
        <h1 className="font-bold text-4xl mt-10">WELCOME ADMINISTRATOR</h1>
        <div className="flex mt-10 gap-10">
        {dataGrade.map((condition, index) => (
            <div
              key={index}
              className="relative flex bg-slate-50 w-full h-40 rounded-2xl justify-center items-center"
            >
              <h3 className="absolute top-5 left-5">Grade {condition.grade}</h3>
              <h2>{condition._count.grade} Butir</h2>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-10 vm:flex-col">
          <div className="w-3/5 h-[400px] flex justify-center items-center bg-[#1F1F25] rounded-2xl box-border p-20 vm:w-full vm:p-5">
            <BarChart activity={dataActivityInWeek}/>
          </div>
          <div className="w-2/5 h-[400px] flex justify-center bg-[#1F1F25] rounded-2xl box-border p-10 vm:w-full">
            <DoughnutChart totalFertile={data.totalFertile} totalNonFertile={data.totalNonFertile}/>
          </div>
        </div>
      </div>

      <div className="side basis-1/4 vm:absolute right-5">
        <SideBar />
      </div>
    </div>
  );
};

export default Dashboard;
