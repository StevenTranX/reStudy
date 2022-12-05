import React from 'react'
import { useAuth } from '../../contexts/authContext'

const HeaderMain = () => {
    const {user , setUser} = useAuth()
  return (
    <div className="flex p-4 shadow-md items-center justify-center bg-wite">
        {user ? (
        <div className="items-center flex gap-x-3">
            <img src = {user.avatar} alt = '' className='w-10 h-10 rounded-full object-cover' />
            <span className = 'text-sm font-medium'>Welcome Back <strong>{user.fullName}</strong></span> 
        </div>
            ) : (
            <span>Welcome</span>) }
            <button className='p-2 rounded-mg bg-gray-300 ml-auto' onClick = {() => {setUser(null)}}>Sign Out</button>
    </div>
  )
}

export default HeaderMain