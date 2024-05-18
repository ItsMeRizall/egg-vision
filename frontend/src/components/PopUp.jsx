import React from 'react'


export const PopUp = ({icon, text, type, callback, close, Message, Confirmation }) => {
  return (
    <>
    <div className="flex justify-center items-center backdrop-blur-sm overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative p-20 w-auto my-12 mx-auto">
                        <div className="border-0 h-96 justify-around rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex flex-col items-center p-5 border-b border-solid border-gray-300 rounded-t ">
                                <img src={icon} alt="" />
                                <h3 className="font-semibold text-[#757D85] text-4xl mt-12">{text}</h3>
                                <h4 className='text-[#6C757D] text-2xl mt-5'>{Message}</h4>
                            </div>
                            <div className="flex items-center justify-around p-3 border-t border-solid border-blueGray-200 rounded-b">
                                {Confirmation ? (
                                    <>
                                    <button
                                    className="text-white bg-[#610000] active:bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    onClick={close}>
                                    Close
                                </button>
                                <button
                                    className="text-white bg-[#610000] active:bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    onClick={callback}
                                >
                                    Submit
                                </button>
                                    </>
                                ) : (
                                    <>
                                    <button
                                    className="text-white bg-[#610000] active:bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    onClick={close}>
                                    OKE
                                </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default PopUp