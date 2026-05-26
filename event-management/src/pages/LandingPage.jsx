import React from 'react'
import { useNavigate } from 'react-router-dom'
function LandingPage() {
const navigate = useNavigate()
  const events = [

    {
      title: "Wedding Event",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
      price: "₹50,000"
    },

    {
      title: "Birthday Party",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
      price: "₹10,000"
    },

    {
      title: "Engagement",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
      price: "₹25,000"
    },

    {
      title: "House Warming",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      price: "₹15,000"
    }

  ]

  return (

    <div className='bg-gray-100 min-h-screen'>

      {/* Navbar */}
      <div className='bg-black text-white px-10 py-5 flex items-center justify-between'>

        <h1 className='text-3xl font-bold text-yellow-400'>
          EventPro
        </h1>

        <div className='flex gap-6 items-center'>

          <a
            href="/login"
            className='hover:text-yellow-400'
          >
            Login
          </a>

          <a
            href="/admin-login"
            className='bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold'
          >
            Admin
          </a>

        </div>

      </div>

      {/* Hero Section */}
      <div className='text-center py-24 px-5'>

        <h1 className='text-6xl font-bold leading-tight'>

          Make Your Events <br />

          Magical ✨

        </h1>

        <p className='text-gray-500 mt-6 text-xl max-w-[700px] mx-auto'>

          Book the best event management companies for
          weddings, birthdays, engagements and more.

        </p>

      <button
  onClick={() => navigate('/event-details')}
  className='bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 duration-300'
>

  Explore Events

</button>

      </div>

      {/* Event Cards */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 px-10 pb-20'>

        {
          events.map((item, index) => (

            <div
              key={index}
              className='bg-white rounded-2xl overflow-hidden shadow hover:scale-105 duration-300'
            >

              <img
                src={item.image}
                alt=""
                className='h-[250px] w-full object-cover'
              />

              <div className='p-5'>

                <h1 className='text-2xl font-bold'>
                  {item.title}
                </h1>

                <h1 className='text-yellow-500 text-xl font-semibold mt-2'>
                  {item.price}
                </h1>

               <a
  href="/event-details"
  className='block'
>

  <button className='bg-black text-white w-full py-3 rounded-xl mt-5 hover:bg-yellow-400 hover:text-black duration-300'>

    Book Now

  </button>

</a>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  )
}

export default LandingPage