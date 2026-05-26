
import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (

    <div
      className='h-[90vh] bg-cover bg-center flex items-center justify-center relative'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')"
      }}
    >

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/60'></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='relative z-10 text-center text-white px-5'
      >

        <h1 className='text-5xl md:text-7xl font-bold leading-tight'>
          Plan Your <span className='text-yellow-400'>Dream Event</span>
        </h1>

        <p className='mt-6 text-lg md:text-2xl text-gray-200'>
          Wedding • Birthday • Engagement • House Warming
        </p>

        <button className='mt-8 bg-yellow-400 text-black px-8 py-3 rounded-xl text-lg font-semibold hover:scale-105 duration-300'>
          Book Now
        </button>

      </motion.div>

    </div>
  )
}

export default Hero