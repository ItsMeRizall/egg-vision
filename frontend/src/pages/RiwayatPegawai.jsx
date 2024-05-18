import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import TableData from "../components/TableData";
import {refreshToken} from "../hooks/authentication/refreshToken.js";
import {useTokenValidation} from "../hooks/authentication/useTokenValidation.js";
import api from "../lib/apiConfig.js"
import Pagination from "../components/pagination.jsx";

const RiwayatPegawai = () => {
  const { tokenData, username, exp, userId } = refreshToken();
  const columns = ["Telur", "Ukuran", "Kondisi", "Grade"];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [data, setData] = useState([]);
  useTokenValidation(tokenData, exp);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  const fetchData = async () => {
    try {
      const response = await api.get(`activity/${userId}`);
      console.log('Response data:', response.data);
      const transformedData = response.data.map((row, index) => {
        return {
          Telur: index + 1,
          Ukuran: `${parseFloat(row.egg_length).toFixed(2)} cm x ${parseFloat(row.egg_width).toFixed(2)} cm`,
          Kondisi: row.egg_inside,
          Grade: row.grade
          // Lanjutkan untuk setiap kolom yang ingin Anda tampilkan
        };
      });
      
      setData(transformedData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  

  useEffect(() => {
    if (userId) {
      fetchData();
    }
  }, [userId]);

  return (
    <>
      <div className="flex flex-col h-screen px-16 py-4 overflow-hidden vm:px-5 md:px-14">
        <Navbar users={username} />
        <div className="flex mt-20 items-center flex-col vm:mt-5">
          <TableData columns={columns} data={currentPosts} title="Riwayat Aktivitas" />
        <Pagination
                totalPosts={data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPosts}
            />
      </div>
        </div>
    </>
  );
};

export default RiwayatPegawai;