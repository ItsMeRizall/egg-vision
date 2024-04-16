import React, {useState} from 'react'

const DeleteAccount = () => {
    const [isShow, setShow] = useState(false)
    
  return (
    <button className='btn px-6 py-2 border-2 border-white rounded-br-2xl rounded-bl-2xl text-white font-normal'>Delete</button>
  )
}

export default DeleteAccount