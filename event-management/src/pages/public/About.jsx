import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function About() {

  const navigate = useNavigate()

  return (

    <div
      className='min-h-screen bg-cover bg-center text-white relative'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3')"
      }}
    >
        <Navbar/>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/75'></div>

      {/* Content Wrapper */}
      <div className='relative z-10'>

        {/* Hero */}
        <div className='h-[60vh] flex flex-col items-center justify-center text-center px-5'>

          <h1 className='text-6xl md:text-8xl font-bold'>

            About EventPro

          </h1>

          <p className='text-gray-300 text-xl mt-8 max-w-3xl leading-9'>

            We create unforgettable experiences for weddings,
            birthdays, engagements and premium celebrations.

          </p>

        </div>

        {/* Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-10 pb-24 items-center'>

          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
            alt=""
            className='rounded-3xl shadow-2xl'
          />

          <div>

            <h1 className='text-5xl font-bold leading-tight'>

              Crafting Beautiful
              Moments ✨

            </h1>

            <p className='text-gray-300 mt-8 leading-9 text-lg'>

              EventPro connects customers with premium event
              management companies for luxury and memorable
              celebrations with modern planning and execution.

            </p>

            <button
              onClick={() => navigate('/event-details')}
              className='bg-yellow-400 text-black px-8 py-4 rounded-2xl mt-10 font-bold hover:scale-105 duration-300'
            >

              Explore Events

            </button>

          </div>
          

        </div>

      </div>
<Footer/>
    </div>

  )
}

export default About
