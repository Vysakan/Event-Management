import React from 'react'

function Navbar() {

  return (

    <div className='bg-black text-white px-10 py-5 flex items-center justify-between fixed top-0 left-0 w-full z-50'>

      <h1 className='text-3xl font-bold text-yellow-400'>
        EventPro
      </h1>

      <div className='flex gap-8 items-center font-medium'>

        <a
          href="/"
          className='hover:text-yellow-400 duration-300'
        >
          Home
        </a>

        <a
          href="/about"
          className='hover:text-yellow-400 duration-300'
        >
          About
        </a>

        <a
          href="/portfolio"
          className='hover:text-yellow-400 duration-300'
        >
          Portfolio
        </a>

        <a
          href="/contact"
          className='hover:text-yellow-400 duration-300'
        >
          Contact
        </a>

        <a
          href="/login"
          className='hover:text-yellow-400 duration-300'
        >
          Login
        </a>

        <a
          href="/admin-login"
          className='bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 duration-300'
        >
          Admin
        </a>

      </div>

    </div>

  )
}

export default Navbar