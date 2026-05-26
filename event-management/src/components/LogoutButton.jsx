import React from 'react'
import { useNavigate } from 'react-router-dom'

function LogoutButton() {

  const navigate = useNavigate()

  function handleLogout() {

    localStorage.clear()

    navigate('/login')
  } 

  return (

    <button
      onClick={handleLogout}
      className='bg-black text-white px-5 py-2 rounded-xl hover:bg-yellow-400 hover:text-black duration-300 font-semibold'
    >

      Logout

    </button>

  )
}

export default LogoutButton