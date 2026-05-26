import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

function AnalyticsChart() {

  const data = [
    {
      month: 'Jan',
      bookings: 20
    },

    {
      month: 'Feb',
      bookings: 35
    },

    {
      month: 'Mar',
      bookings: 50
    },

    {
      month: 'Apr',
      bookings: 40
    },

    {
      month: 'May',
      bookings: 70
    },

    {
      month: 'Jun',
      bookings: 90
    }
  ]

  return (

    <div className='bg-white p-6 rounded-2xl shadow-sm mt-10'>

      <h1 className='text-2xl font-bold mb-6'>
        Booking Analytics
      </h1>

      <div className='w-full h-[350px]'>

        <ResponsiveContainer>

          <LineChart data={data}>

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="bookings"
              stroke="#facc15"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}

export default AnalyticsChart