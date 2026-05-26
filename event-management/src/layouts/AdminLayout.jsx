import React, { useState } from 'react'
import Sidbar from '../components/Sidbar'
import Navbar from '../components/Navbar'

function AdminLayout({ children }) {

  const [isOpen, setIsOpen] = useState(true)

  return (

    <div className='flex bg-gray-100 min-h-screen'>

      {/* Sidebar */}
      <Sidbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Right Side */}
      <div className='flex-1'>

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className='p-8'>

          {children}

        </div>

      </div>

    </div>
  )
}

export default AdminLayout