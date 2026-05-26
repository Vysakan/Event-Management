import React from 'react'
import {
  FaHome,
  FaCalendarAlt,
  FaUsers,
  FaBuilding,
  FaMoneyBill,
  FaClipboardList,
  FaBars
} from 'react-icons/fa'

import { Link } from 'react-router-dom'

function Sidebar({ isOpen, setIsOpen }) {

  const role = localStorage.getItem("role")

  return (

    <div
      className={`
        bg-black text-white min-h-screen p-5 duration-300
        ${isOpen ? 'w-[260px]' : 'w-[90px]'}
      `}
    >

      {/* Top */}
      <div className='flex items-center justify-between mb-10'>

        {
          isOpen &&
          <h1 className='text-3xl font-bold text-yellow-400'>
            EventPro
          </h1>
        }

        <FaBars
          size={22}
          className='cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        />

      </div>

      {/* Menu */}
      <div className='flex flex-col gap-4'>

        {/* ADMIN MENU */}
        {
          role === "admin" && (

            <>

              <Link to="/dashboard">

                <div className='flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800 duration-300'>

                  <FaHome />

                  {
                    isOpen &&
                    <h1>Dashboard</h1>
                  }

                </div>

              </Link>

              <Link to="/events">

                <div className='flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800 duration-300'>

                  <FaCalendarAlt />

                  {
                    isOpen &&
                    <h1>Events</h1>
                  }

                </div>

              </Link>

              <Link to="/users">

                <div className='flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800 duration-300'>

                  <FaUsers />

                  {
                    isOpen &&
                    <h1>Users</h1>
                  }

                </div>

              </Link>

              <Link to="/companies">

                <div className='flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800 duration-300'>

                  <FaBuilding />

                  {
                    isOpen &&
                    <h1>Companies</h1>
                  }

                </div>

              </Link>

            </>

          )
        }

        {/* USER MENU */}
        {
          role === "user" && (

            <>

              <Link to="/user-dashboard">

                <div className='flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800 duration-300'>

                  <FaHome />

                  {
                    isOpen &&
                    <h1>Dashboard</h1>
                  }

                </div>

              </Link>

              <Link to="/my-bookings">

                <div className='flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800 duration-300'>

                  <FaClipboardList />

                  {
                    isOpen &&
                    <h1>My Bookings</h1>
                  }

                </div>

              </Link>

              <Link to="/payments">

                <div className='flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800 duration-300'>

                  <FaMoneyBill />

                  {
                    isOpen &&
                    <h1>Payments</h1>
                  }

                </div>

              </Link>

            </>

          )
        }

        {/* COMPANY MENU */}
        {
          role === "company" && (

            <>

              <Link to="/company-dashboard">

                <div className='flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800 duration-300'>

                  <FaHome />

                  {
                    isOpen &&
                    <h1>Dashboard</h1>
                  }

                </div>

              </Link>

              <Link to="/add-events">

                <div className='flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800 duration-300'>

                  <FaCalendarAlt />

                  {
                    isOpen &&
                    <h1>Add Events</h1>
                  }

                </div>

              </Link>

              <Link to="/revenue">

                <div className='flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800 duration-300'>

                  <FaMoneyBill />

                  {
                    isOpen &&
                    <h1>Revenue</h1>
                  }

                </div>

              </Link>
              <Link to="/booking-requests">

  <div className='flex items-center gap-4 p-4 rounded-xl hover:bg-gray-800 duration-300'>

    {
      isOpen &&
      <h1>Booking Requests</h1>
    }

  </div>

</Link>

            </>

          )
        }

      </div>

    </div>
  )
}

export default Sidebar