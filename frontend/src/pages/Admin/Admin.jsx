import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteAccount from "./DeleteAccount";
import UpdateAccount from "./UpdateAccount";
import SideBar from "../../components/SideBar";
import api from "../../lib/apiConfig";
import AddAccountP from "./addacccount_P";
import { refreshToken } from "../../hooks/authentication/refreshToken.js";
import { useTokenValidation } from "../../hooks/authentication/useTokenValidation.js";
import Pagination from "../../components/pagination.jsx";
import PopUp from "../../components/PopUp.jsx";
import tanda_seru from "../../assets/tanda_seru.svg";
import gagal from "../../assets/gagal.svg";
import centang from "../../assets/centang.svg";

const Admin = () => {
  const [data, setData] = useState([]);
  const { tokenData, username, exp, role } = refreshToken();
  useTokenValidation(tokenData, username, role, "admin");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  const [notif, setNotif] = useState(false) 
  const [notifMessages, setNotifMessages] = useState("")
  const [succes, setSuccess] = useState()
  const [confirmation, setConfirmation] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respone = await api.get("getallusers", {
          headers: {
            Authorization: `Bearer`,
          },
        });
        setData(respone.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }),
    [];

  return (
    <div className="flex h-screen relative">
      <div className="main w-full p-12">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <h3 className="font-bold text-2xl">EGG VISION</h3>
          </Link>

          <form className="">
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

        <div className="flex flex-col mt-5 bg-[#610000] rounded-lg text-white p-0 m-0">
          <div className="flex">
            <AddAccountP setNotif={setNotif} setMessages={setNotifMessages} setSuccess={setSuccess}/>
          </div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          No
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Username
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Role
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#3E0000]">
                      {currentPosts.map((value, index) => {
                        return (
                          <tr
                            className="border-b dark:border-neutral-500"
                            key={index}
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {index + 1}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {value.username}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {value.role}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {value.status}
                            </td>
                            <td className="py-4">
                              <UpdateAccount
                                id={value.id_user}
                                username={value.username}
                                role={value.role}
                                status={value.status}
                                setNotif={setNotif}
                                setMessages={setNotifMessages}
                                setSuccess={setSuccess}
                              />
                            </td>
                            <td className="">
                              <DeleteAccount id={value.id_user}  
                                setNotif={setNotif} 
                                setMessages={setNotifMessages}
                                setSuccess={setSuccess}/>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <Pagination
          totalPosts={data.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPosts}
        />
        </div>
      </div>
      <div className="side w-1/4">
        <SideBar />
      </div>
      {
        notif &&
        <PopUp icon={succes? centang : gagal} text={succes? "Berhasil" : " Tidak Berhasil"} Message={notifMessages} Confirmation={false} close={() => setNotif(false)}/>
      }
    </div>
  );
};

export default Admin;
