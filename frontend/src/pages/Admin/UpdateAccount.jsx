import React, {useState} from 'react'

const UpdateAccount = () => {
    const [isShow, setShow] = useState(false)

  return (
    <button className='btn w-[100px] py-2 border-2 border-white rounded-br-2xl rounded-bl-2xl text-white font-normal'>Edit</button>
  )
}

export default UpdateAccount