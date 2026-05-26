import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {

  const navigate = useNavigate()

  function handleLogin() {

    localStorage.setItem("admin", true)

    localStorage.setItem("role", "admin")

    navigate('/dashboard')
  }

  return (

    <div className='min-h-screen flex items-center justify-center bg-gray-100'>

      <div className='bg-white p-10 rounded-2xl shadow w-[400px]'>

        <h1 className='text-3xl font-bold mb-8 text-center'>
          Admin Login
        </h1>

        <input
          type="email"
          placeholder='Admin Email'
          className='w-full p-3 border rounded-xl mb-5 outline-none'
        />

        <input
          type="password"
          placeholder='Password'
          className='w-full p-3 border rounded-xl mb-5 outline-none'
        />

        <button
          onClick={handleLogin}
          className='w-full bg-black text-white py-3 rounded-xl hover:bg-yellow-400 hover:text-black duration-300'
        >

          Login

        </button>

      </div>

    </div>
  )
}

export default AdminLogin