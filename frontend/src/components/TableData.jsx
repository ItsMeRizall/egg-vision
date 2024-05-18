import React from 'react';
import { useNavigate } from 'react-router-dom';


const TableData = ({ columns, data, title, unduh=false, fncUnduh , detail=false, funcDetail, funcHapus}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container flex flex-col mt-5 bg-[#610000] rounded-lg text-white p-0 m-0">
        <div className='m-5 flex justify-between px-5'>
            {title ?<h3 className='text-2xl'>{title}</h3> : <a href="/dashboard/Add" className='btn px-6 py-3 border-2 border-white rounded-tr-2xl rounded-tl-2xl text-white font-normal'>Tambah Akun</a>}
            {unduh ? <button onClick={fncUnduh}  className='btn px-6 py-2 border-2 border-white rounded-br-2xl rounded-bl-2xl text-white font-normal'>Unduh</button> : ""}
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      {columns.map((columnName, index) => (
                        <th key={index} scope="col" className="px-6 py-4 text-center">{columnName}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className='bg-[#3E0000] h-full'>
                    {data.map((rowData, rowIndex) => (
                      <tr key={rowIndex} className="border-b dark:border-neutral-500">
                        {columns.map((columnName, colIndex) => (
                          <td key={colIndex} className="whitespace-nowrap px-6 py-4 text-center">{rowData[columnName]}</td>
                        ))}
                        {detail? <td className="whitespace-nowrap px-6 py-4 text-center"><button onClick={() => {navigate(`/user-riwayat/detail/${rowData['Username']}`)}} className="btn w-[100px] py-2 border-2 border-white rounded-br-2xl rounded-bl-2xl text-white font-normal">Detail</button></td> : null}
                        {detail? <td className="whitespace-nowrap px-6 py-4 text-center"><button onClick={funcHapus} className="btn w-[100px] py-2 border-2 border-white rounded-br-2xl rounded-bl-2xl text-white font-normal">Hapus</button></td> : null}
                        {/* <td className="py-4"><UpdateAccount id={rowData.id_user} username={rowData.username} role={rowData.role} status={rowData.status} /></td>
                        <td className=""><DeleteAccount id={rowData.id_user} /></td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableData;
