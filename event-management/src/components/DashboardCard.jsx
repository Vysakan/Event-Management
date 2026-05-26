import React from 'react'

function DashboardCard({ title, value }) {
  return (

    <div className='bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl duration-300'>

      <h1 className='text-gray-500 text-lg'>
        {title}
      </h1>

      <h1 className='text-4xl font-bold mt-4'>
        {value}
      </h1>

    </div>
  )
}

export default DashboardCard