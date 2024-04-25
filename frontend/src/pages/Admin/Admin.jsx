import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import DeleteAccount from './DeleteAccount'
import UpdateAccount from './UpdateAccount'
import axios from 'axios'
import SideBar from '../../components/SideBar'

const Admin = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }), [];


  return (
    <div className="flex h-screen">
        <div className="main w-full p-12">
            <div className="flex items-center justify-between">
                <Link to={'/'}>
                    <h3 className="font-bold text-base">EGG VISION</h3>
                </Link>
                
                <form class="">   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-[#DCDCDC] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="bg-[#A3A3A3] text-[#DCDCDC] block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 " placeholder="Search" required />
                        {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                    </div>
                </form>

            </div>

            <div className="flex flex-col mt-5 bg-[#610000] rounded-lg text-white p-0 m-0">
                <div>
                <a href="/dashboard/Add" className='btn m-5 px-6 py-3 border-2 border-white rounded-tr-2xl rounded-tl-2xl text-white font-normal'>Tambah Akun</a>
                </div>
                <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                            <th scope="col" className="px-6 py-4">No</th>
                            <th scope="col" className="px-6 py-4">Username</th>
                            <th scope="col" className="px-6 py-4">Role</th>
                            <th scope="col" className="px-6 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className='bg-[#3E0000]'>
                            {
                                data.map((value, index) => {
                                    return <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{value.username}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{value.role}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{value.status}</td>
                                    <td className="py-4"><UpdateAccount/></td>
                                    <td className=""><DeleteAccount/></td>
                                    </tr>
                                })
                            }
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="side w-1/4">
            <SideBar />
        </div>
    </div>
  )
}

export default Admin