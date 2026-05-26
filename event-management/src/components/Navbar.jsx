import React from 'react'
import {
  FaBell,
  FaUserCircle
} from 'react-icons/fa'

import { useNavigate } from 'react-router-dom'
import LogoutButton from './LogoutButton'

function Navbar() {

  const navigate = useNavigate()

  function handleLogout() {

    localStorage.removeItem("admin")

    navigate('/')
  }

  return (

    <div className='h-20 bg-white shadow-sm flex items-center justify-between px-8'>

      {/* Search */}
      <div>

        <input
          type="text"
          placeholder='Search...'
          className='bg-gray-100 px-4 py-2 rounded-xl outline-none w-[250px]'
        />

      </div>

      {/* Right */}
      <div className='flex items-center gap-6'>

        <FaBell
          size={22}
          className='cursor-pointer'
        />

        <div className='flex items-center gap-3'>

          <FaUserCircle size={35} />

          <h1 className='font-semibold'>
            Admin
          </h1>

        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className='bg-black text-white px-5 py-2 rounded-xl hover:bg-red-500 duration-300'
        >

         <LogoutButton/>

        </button>

      </div>

    </div>
  )
}

export default Navbar