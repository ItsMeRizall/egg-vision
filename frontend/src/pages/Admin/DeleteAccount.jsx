import React, {useState} from 'react'
import axios from 'axios'

const DeleteAccount = (props) => {
    const [isShow, setShow] = useState(false)

    const handleDelete = async () => { 
      try {
        const res = await axios.delete(`http://localhost:3000/users/${props.id}`)
        console.log("Delete success", res.data)
        setShow(false)

    }
    catch (err){
        console.error('Delete error', err)
    }
    }


    
  return (
    <>
    <button onClick={() => setShow(true)} className='btn px-6 py-2 border-2 border-white rounded-br-2xl rounded-bl-2xl text-white font-normal'>Delete</button>
    {isShow ?(
                <div className="flex justify-center items-center backdrop-blur-sm overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-12 mx-auto">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                <h3 className="text-xl font-semibold text-black">Are you sure want to delete?</h3>
                            </div>
                            <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    onClick={() => setShow(false)}>
                                    Close
                                </button>
                                <button
                                    className="text-white bg-[#610000] active:bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    onClick={handleDelete}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
    </>
    
  )
}

export default DeleteAccount