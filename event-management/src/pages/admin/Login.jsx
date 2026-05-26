import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()
const [role, setRole] = useState("")
  return (

    <div className='min-h-screen flex items-center justify-center bg-gray-100'>

      <div className='bg-white p-10 rounded-2xl shadow w-[400px]'>

        <h1 className='text-3xl font-bold mb-8 text-center'>
          Login
        </h1>

        <input
          type="email"
          placeholder='Email'
          className='w-full p-3 border rounded-xl mb-5 outline-none'
        />

        <input
          type="password"
          placeholder='Password'
          className='w-full p-3 border rounded-xl mb-5 outline-none'
        />
<select
  className='w-full p-3 border rounded-xl mb-5 outline-none'
  onChange={(e) => setRole(e.target.value)}
>

  <option value="">Select Role</option>

  {/* <option value="admin">Admin</option> */}

  <option value="user">User</option>

  <option value="company">Company</option>

</select>
        <button

  onClick={() => {

    localStorage.setItem("admin", true)

    localStorage.setItem("role", role)

    if (role === "admin") {
      navigate('/dashboard')
    }

    else if (role === "user") {
      navigate('/user-dashboard')
    }

    else if (role === "company") {
      navigate('/company-dashboard')
    }
  }}

  className='w-full bg-black text-white py-3 rounded-xl hover:bg-yellow-400 hover:text-black duration-300'
>

  Login

</button>

      </div>

    </div>

  )
}

export default Login