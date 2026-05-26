import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function CompanyDashboard() {

  const events = [

    {
      title: "Wedding Event",
      bookings: 25,
      status: "Active"
    },

    {
      title: "Birthday Party",
      bookings: 12,
      status: "Pending"
    }

  ]

  return (

    <AdminLayout>

      {/* Heading */}
      <h1 className='text-4xl font-bold'>
        Company Dashboard
      </h1>

      <p className='text-gray-500 mt-2'>
        Welcome back Company 👋
      </p>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>

        {/* Total Events */}
        <div className='bg-white p-6 rounded-2xl shadow'>

          <h1 className='text-gray-500'>
            Total Events
          </h1>

          <h1 className='text-4xl font-bold mt-3'>
            12
          </h1>

        </div>

        {/* Total Bookings */}
        <div className='bg-white p-6 rounded-2xl shadow'>

          <h1 className='text-gray-500'>
            Total Bookings
          </h1>

          <h1 className='text-4xl font-bold mt-3'>
            85
          </h1>

        </div>

        {/* Revenue */}
        <div className='bg-white p-6 rounded-2xl shadow'>

          <h1 className='text-gray-500'>
            Revenue
          </h1>

          <h1 className='text-4xl font-bold mt-3'>
            ₹1,20,000
          </h1>

        </div>

      </div>

      {/* Added Events */}
      <div className='bg-white p-6 rounded-2xl shadow mt-10'>

        <h1 className='text-2xl font-bold mb-6'>
          Added Events
        </h1>

        <table className='w-full'>

          <thead>

            <tr className='border-b text-left'>

              <th className='pb-4'>Event</th>
              <th className='pb-4'>Bookings</th>
              <th className='pb-4'>Status</th>

            </tr>

          </thead>

          <tbody>

            {
              events.map((item, index) => (

                <tr
                  key={index}
                  className='border-b'
                >

                  <td className='py-4'>
                    {item.title}
                  </td>

                  <td>
                    {item.bookings}
                  </td>

                  <td>

                    <span className='bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm'>

                      {item.status}

                    </span>

                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </AdminLayout>

  )
}

export default CompanyDashboard