import React from 'react'
import UserLayout from '../../layouts/UserLayout'
import { useNavigate } from 'react-router-dom'
import LogoutButton from '../../components/LogoutButton'

function UserDashboard() {
const navigate = useNavigate()
  const bookings = [

    {
      event: "Wedding Event",
      date: "2026-06-15",
      status: "Approved"
    },

    {
      event: "Birthday Party",
      date: "2026-07-01",
      status: "Pending"
    },

    {
      event: "House Warming",
      date: "2026-08-10",
      status: "Completed"
    }

  ]

  return (

    <UserLayout>

      {/* Top Banner */}
      <div className='bg-gradient-to-r from-black to-gray-800 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between'>

        <div>

          <h1 className='text-5xl font-bold leading-tight'>

            Welcome Back 👋

          </h1>

          <p className='text-gray-300 mt-5 text-lg max-w-[600px]'>

            Manage your bookings, explore upcoming events and
            make your celebrations unforgettable.

          </p>

          <button
  onClick={() => navigate('/')}
  className='bg-yellow-400 text-black px-8 py-4 rounded-2xl mt-8 font-semibold hover:scale-105 duration-300'
>

  Explore Events

</button>

        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
          className='w-[250px] mt-10 md:mt-0'
        />

      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>

        {/* Total Bookings */}
        <div className='bg-white p-8 rounded-3xl shadow hover:scale-105 duration-300'>

          <h1 className='text-gray-500 text-lg'>
            Total Bookings
          </h1>

          <h1 className='text-5xl font-bold mt-4'>
            12
          </h1>

        </div>

        {/* Upcoming Events */}
        <div className='bg-white p-8 rounded-3xl shadow hover:scale-105 duration-300'>

          <h1 className='text-gray-500 text-lg'>
            Upcoming Events
          </h1>

          <h1 className='text-5xl font-bold mt-4'>
            5
          </h1>

        </div>

        {/* Payments */}
        <div className='bg-white p-8 rounded-3xl shadow hover:scale-105 duration-300'>

          <h1 className='text-gray-500 text-lg'>
            Payments Done
          </h1>

          <h1 className='text-5xl font-bold mt-4'>
            ₹45K
          </h1>

        </div>

      </div>

      {/* Recent Bookings */}
      <div className='bg-white p-8 rounded-3xl shadow mt-10'>

        <div className='flex items-center justify-between mb-8'>

          <h1 className='text-3xl font-bold'>
            Recent Bookings
          </h1>

          <button className='bg-black text-white px-5 py-2 rounded-xl hover:bg-yellow-400 hover:text-black duration-300'>

            View All

          </button>

        </div>

        <div className='overflow-x-auto'>

          <table className='w-full'>

            <thead>

              <tr className='border-b text-left'>

                <th className='pb-5'>Event</th>
                <th className='pb-5'>Date</th>
                <th className='pb-5'>Status</th>

              </tr>

            </thead>

            <tbody>

              {
                bookings.map((item, index) => (

                  <tr
                    key={index}
                    className='border-b hover:bg-gray-50 duration-200'
                  >

                    <td className='py-5 font-semibold'>
                      {item.event}
                    </td>

                    <td>
                      {item.date}
                    </td>

                    <td>

                      <span className='bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold'>

                        {item.status}

                      </span>

                    </td>

                  </tr>

                ))
              }

            </tbody>

          </table>

        </div>

      </div>

    </UserLayout>

  )
}

export default UserDashboard