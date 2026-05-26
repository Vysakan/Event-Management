import React from 'react'

function EventCard({ image, title }) {
  return (

    <div className='bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl duration-300 hover:-translate-y-2'>

      <img
        src={image}
        alt=""
        className='h-60 w-full object-cover'
      />

      <div className='p-5'>

        <h1 className='text-2xl font-bold'>
          {title}
        </h1>

        <button className='mt-4 bg-black text-white px-5 py-2 rounded-lg hover:bg-yellow-400 hover:text-black duration-300'>
          Explore
        </button>

      </div>

    </div>
  )
}

export default EventCard