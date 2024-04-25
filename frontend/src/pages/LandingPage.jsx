import React from 'react'
import NavLink from '../components/NavLink'

const LandingPage = () => {
  return (
    <>
    <div children className='h-screen px-16 py-4'>
    <div className='flex bg-transparent justify-end items-center text-[#3E0000]'>
    <a href="/login" className="px-9 py-2 border-[#3E0000] border-2 rounded-xl hover:text-white hover:bg-[#3E0000]" >Sign In</a>
    </div>
    <div className="flex justify-center flex-col h-full text-[#3E0000]">
                <h1 className="text-8xl font-extrabold">EGG VISION</h1>
                <p className="text-2xl mt-4">we make a technology to simplify and speed up egg quality control</p>
            </div>
    </div>
    </>
  )
}

export default LandingPage