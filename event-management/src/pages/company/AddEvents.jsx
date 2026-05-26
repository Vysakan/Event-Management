import React, { useState } from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function AddEvents() {

  const [events, setEvents] = useState([])
const [editIndex, setEditIndex] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: ''
  })

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {

  e.preventDefault()

  if (editIndex !== null) {

    const updatedEvents = [...events]

    updatedEvents[editIndex] = formData

    setEvents(updatedEvents)

    setEditIndex(null)

  }

  else {

    setEvents([...events, formData])
  }

  setFormData({
    title: '',
    price: '',
    category: ''
  })
}
  function deleteEvent(index) {

    const updatedEvents = events.filter(
      (_, i) => i !== index
    )

    setEvents(updatedEvents)
  }
function editEvent(index) {

  setFormData(events[index])

  setEditIndex(index)
}
  return (

    <AdminLayout>

      <h1 className='text-4xl font-bold mb-8'>
        Add Events
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className='bg-white p-6 rounded-2xl shadow'
      >

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

          <input
            type="text"
            placeholder='Event Title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            className='p-3 border rounded-xl outline-none'
          />

          <input
            type="text"
            placeholder='Price'
            name='price'
            value={formData.price}
            onChange={handleChange}
            className='p-3 border rounded-xl outline-none'
          />

          <input
            type="text"
            placeholder='Category'
            name='category'
            value={formData.category}
            onChange={handleChange}
            className='p-3 border rounded-xl outline-none'
          />

        </div>

        <button className='bg-black text-white px-6 py-3 rounded-xl mt-6 hover:bg-yellow-400 hover:text-black duration-300'>

          Add Event

        </button>

      </form>

      {/* Events List */}
      <div className='bg-white p-6 rounded-2xl shadow mt-10'>

        <h1 className='text-2xl font-bold mb-6'>
        {
  editIndex !== null
    ? "Update Event"
    : "Add Event"
}
        </h1>

        <table className='w-full'>

          <thead>

            <tr className='border-b text-left'>

              <th className='pb-4'>Title</th>
              <th className='pb-4'>Price</th>
              <th className='pb-4'>Category</th>
              <th className='pb-4'>Action</th>

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
                    ₹ {item.price}
                  </td>

                  <td>
                    {item.category}
                  </td>

                  <td>
<div className='flex gap-3'>

  <button
    onClick={() => editEvent(index)}
    className='bg-yellow-400 text-black px-4 py-2 rounded-lg'
  >

    Edit

  </button>

  <button
    onClick={() => deleteEvent(index)}
    className='bg-red-500 text-white px-4 py-2 rounded-lg'
  >

    Delete

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

export default AddEvents