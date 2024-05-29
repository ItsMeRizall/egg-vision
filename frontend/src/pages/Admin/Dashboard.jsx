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
