import React, { useState } from 'react'

function AddEvent() {

  const [eventData, setEventData] = useState({
    title: '',
    category: '',
    price: '',
    date: '',
    location: ''
  })

  function handleChange(e) {

    setEventData({
      ...eventData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    console.log(eventData)

    alert("Event Added Successfully")
  }

  return (

    <div className='bg-white p-8 rounded-2xl shadow-sm'>

      <h1 className='text-3xl font-bold mb-8'>
        Add New Event
      </h1>

      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 md:grid-cols-2 gap-6'
      >

        {/* Title */}
        <div>

          <label className='font-semibold'>
            Event Title
          </label>

          <input
            type="text"
            name='title'
            placeholder='Enter event title'
            className='w-full mt-2 p-3 border rounded-xl outline-none'
            onChange={handleChange}
          />

        </div>

        {/* Category */}
        <div>

          <label className='font-semibold'>
            Category
          </label>

          <select
            name='category'
            className='w-full mt-2 p-3 border rounded-xl outline-none'
            onChange={handleChange}
          >

            <option value="">Select Category</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Engagement">Engagement</option>
            <option value="House Warming">House Warming</option>

          </select>

        </div>

        {/* Price */}
        <div>

          <label className='font-semibold'>
            Price
          </label>

          <input
            type="number"
            name='price'
            placeholder='Enter amount'
            className='w-full mt-2 p-3 border rounded-xl outline-none'
            onChange={handleChange}
          />

        </div>

        {/* Date */}
        <div>

          <label className='font-semibold'>
            Event Date
          </label>

          <input
            type="date"
            name='date'
            className='w-full mt-2 p-3 border rounded-xl outline-none'
            onChange={handleChange}
          />

        </div>

        {/* Location */}
        <div className='md:col-span-2'>

          <label className='font-semibold'>
            Location
          </label>

          <input
            type="text"
            name='location'
            placeholder='Enter location'
            className='w-full mt-2 p-3 border rounded-xl outline-none'
            onChange={handleChange}
          />

        </div>

        {/* Button */}
        <div className='md:col-span-2'>

          <button className='bg-black text-white px-8 py-3 rounded-xl hover:bg-yellow-400 hover:text-black duration-300'>

            Add Event

          </button>

        </div>

      </form>

    </div>
  )
}

export default AddEvent