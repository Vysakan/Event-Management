import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Payments() {

  return (

    <AdminLayout>

      <h1 className='text-4xl font-bold mb-8'>
        Payments
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

        <div className='bg-white p-6 rounded-2xl shadow'>

          <h1 className='text-gray-500'>
            Total Paid
          </h1>

          <h1 className='text-4xl font-bold mt-3'>
            ₹25,000
          </h1>

        </div>

        <div className='bg-white p-6 rounded-2xl shadow'>

          <h1 className='text-gray-500'>
            Pending Amount
          </h1>

          <h1 className='text-4xl font-bold mt-3'>
            ₹10,000
          </h1>

        </div>

      </div>

    </AdminLayout>

  )
}

export default Payments