import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import AddEvent from './AddEvents'


function Events() {
  return (

    <AdminLayout>

      <h1 className='text-4xl font-bold mb-8'>
        Events Management
      </h1>

      <AddEvent />

    </AdminLayout>
  )
}

export default Events