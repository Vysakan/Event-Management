import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function BookingRequests() {

  const bookings = [

    {
      customer: "Rahul",
      event: "Wedding Event",
      date: "2026-06-15",
      status: "Pending"
    },

    {
      customer: "Arjun",
      event: "Birthday Party",
      date: "2026-07-01",
      status: "Approved"
    }

  ]

  return (

    <AdminLayout>

      <h1 className='text-4xl font-bold mb-8'>
        Booking Requests
      </h1>

      <div className='bg-white p-6 rounded-2xl shadow'>

        <table className='w-full'>

          <thead>

            <tr className='border-b text-left'>

              <th className='pb-4'>Customer</th>
              <th className='pb-4'>Event</th>
              <th className='pb-4'>Date</th>
              <th className='pb-4'>Status</th>
              <th className='pb-4'>Action</th>

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
                    {item.customer}
                  </td>

                  <td>
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

                  <td>

                    <div className='flex gap-3'>

                      <button className='bg-green-500 text-white px-4 py-2 rounded-lg'>

                        Accept

                      </button>

                      <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>

                        Reject

                      </button>

                    </div>

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

export default BookingRequests