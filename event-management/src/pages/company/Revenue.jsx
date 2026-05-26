import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Revenue() {

  return (

    <AdminLayout>

      <h1 className='text-4xl font-bold mb-8'>
        Revenue
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

        <div className='bg-white p-6 rounded-2xl shadow'>

          <h1 className='text-gray-500'>
            Monthly Revenue
          </h1>

          <h1 className='text-4xl font-bold mt-3'>
            ₹1,20,000
          </h1>

        </div>

      </div>

    </AdminLayout>

  )
}

export default Revenue