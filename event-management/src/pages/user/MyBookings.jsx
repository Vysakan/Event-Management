import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function MyBookings() {

  const bookings = [
    {
      event: "Wedding",
      date: "May 28",
      status: "Approved"
    },

    {
      event: "Birthday",
      date: "June 02",
      status: "Pending"
    }
  ]

  return (

    <AdminLayout>

      <h1 className='text-4xl font-bold mb-8'>
        My Bookings
      </h1>

      <div className='bg-white rounded-2xl shadow p-6'>

        <table className='w-full'>

          <thead>

            <tr className='border-b text-left'>

              <th className='pb-4'>Event</th>
              <th className='pb-4'>Date</th>
              <th className='pb-4'>Status</th>

            </tr>

          </thead>

          <tbody>

            {
              bookings.map((item, index) => (

                <tr
                  key={index}
                  className='border-b'
                >

                  <td className='py-4'>
                    {item.event}
                  </td>

                  <td>
                    {item.date}
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

export default MyBookings