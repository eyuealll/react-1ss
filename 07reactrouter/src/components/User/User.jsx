import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-orange-500 text-black text-4xl justify-center text-center font-medium uppercase py-4' >User: {userid}</div>
  )
}

export default User