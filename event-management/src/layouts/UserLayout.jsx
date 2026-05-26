import React, { useState } from 'react'
import Sidebar from '../components/Sidbar'
import LogoutButton from '../components/LogoutButton'

function UserLayout({ children }) {

  const [isOpen, setIsOpen] = useState(true)

  return (

    <div className='flex bg-gray-100 min-h-screen'>

      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Main Content */}
      <div className='flex-1'>

        {/* Navbar */}
        <div className='bg-white shadow px-8 py-5 flex items-center justify-between'>

          <h1 className='text-2xl font-bold'>
            User Dashboard
          </h1>

          {/* Right Side */}
          <div className='flex items-center gap-4'>

            <LogoutButton />

            <img
              src="https://i.pravatar.cc/40"
              alt=""
              className='w-10 h-10 rounded-full'
            />

          </div>

        </div>

        {/* Page Content */}
        <div className='p-8'>

          {children}

        </div>

      </div>

    </div>

  )
}

export default UserLayout