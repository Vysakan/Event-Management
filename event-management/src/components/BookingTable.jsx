import React from 'react'

function BookingTable() {

  const bookings = [
    {
      event: "Wedding",
      customer: "Rahul",
      date: "May 28",
      status: "Approved"
    },

    {
      event: "Birthday",
      customer: "Arjun",
      date: "June 02",
      status: "Pending"
    },

    {
      event: "Engagement",
      customer: "Maya",
      date: "June 10",
      status: "Completed"
    }
  ]

  return (

    <div className='bg-white p-6 rounded-2xl shadow-sm mt-10 overflow-x-auto'>

      <h1 className='text-2xl font-bold mb-6'>
        Recent Bookings
      </h1>

      <table className='w-full'>

        <thead>

          <tr className='border-b text-left'>

            <th className='pb-4'>Event</th>
            <th className='pb-4'>Customer</th>
            <th className='pb-4'>Date</th>
            <th className='pb-4'>Status</th>

          </tr>

        </thead>

        <tbody>

          {
            bookings.map((item, index) => (

              <tr
                key={index}
                className='border-b hover:bg-gray-50 duration-200'
              >

                <td className='py-4'>{item.event}</td>

                <td>{item.customer}</td>

                <td>{item.date}</td>

                <td>

                  <span className='bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm'>
                    {item.status}
                  </span>

                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>
  )
}

export default BookingTable