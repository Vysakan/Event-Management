import React, { useState } from 'react'

function EventDetails() {

  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState(false)

  return (

    <div className='bg-gray-100 min-h-screen'>

      {/* Navbar */}
      <div className='bg-black text-white px-10 py-5 flex items-center justify-between'>

        <h1 className='text-3xl font-bold text-yellow-400'>
          EventPro
        </h1>

        <button className='bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold'>
          Login
        </button>

      </div>

      {/* Main Section */}
      <div className='max-w-7xl mx-auto px-5 py-16 grid grid-cols-1 md:grid-cols-2 gap-12'>

        {/* Left Image */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552"
            alt=""
            className='w-full h-[500px] object-cover rounded-3xl shadow'
          />

        </div>

        {/* Right Content */}
        <div>

          <h1 className='text-5xl font-bold'>
            Wedding Event
          </h1>

          <p className='text-yellow-500 text-3xl font-semibold mt-5'>
            ₹50,000
          </p>

          <p className='text-gray-600 mt-8 leading-8 text-lg'>

            Make your special day unforgettable with premium wedding
            decorations, photography, catering and event management
            services.

          </p>

          {/* Features */}
          <div className='mt-10 flex flex-wrap gap-4'>

            <span className='bg-white px-5 py-3 rounded-xl shadow'>
              Photography
            </span>

            <span className='bg-white px-5 py-3 rounded-xl shadow'>
              Catering
            </span>

            <span className='bg-white px-5 py-3 rounded-xl shadow'>
              Decoration
            </span>

            <span className='bg-white px-5 py-3 rounded-xl shadow'>
              DJ Music
            </span>

          </div>

          {/* Button */}
          <button
  onClick={() => {

    setSuccess(true)

    setTimeout(() => {

      setOpen(false)

      setSuccess(false)

    }, 2000)

  }}

  className='bg-black text-white py-4 rounded-xl hover:bg-yellow-400 hover:text-black duration-300'
>

            Book Now

          </button>

        </div>

      </div>

      {/* Booking Modal */}
      {
        open && (

          <div className='fixed inset-0 bg-black/50 flex items-center justify-center px-5 z-50'>

            <div className='bg-white w-full max-w-xl rounded-3xl p-8 relative'>

              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className='absolute top-5 right-5 text-2xl'
              >

                ✕

              </button>

              <h1 className='text-3xl font-bold mb-8'>
                Book Event
              </h1>

              {/* Form */}
              <div className='flex flex-col gap-5'>

                <input
                  type="text"
                  placeholder='Your Name'
                  className='p-4 border rounded-xl outline-none'
                />

                <input
                  type="text"
                  placeholder='Phone Number'
                  className='p-4 border rounded-xl outline-none'
                />

                <input
                  type="date"
                  className='p-4 border rounded-xl outline-none'
                />

                <textarea
                  placeholder='Address'
                  className='p-4 border rounded-xl outline-none h-[120px]'
                />

                <button className='bg-black text-white py-4 rounded-xl hover:bg-yellow-400 hover:text-black duration-300'>

                  Confirm Booking

                </button>
                {
  success && (

    <div className='bg-green-100 text-green-700 p-4 rounded-xl text-center font-semibold'>

      Booking Successful 🎉

    </div>

  )
}

              </div>

            </div>

          </div>

        )
      }

    </div>

  )
}

export default EventDetails