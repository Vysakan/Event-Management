import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
function Portfolio() {

  const works = [

    {
      title: "Luxury Wedding",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552"
    },

    {
      title: "Birthday Celebration",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3"
    },

    {
      title: "Engagement Event",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
    }

  ]

  return (
<>
    <div
      className='min-h-screen bg-cover bg-center text-white relative px-10 py-20'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')"
      }}
    >

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/80'></div>
<Navbar/>
      {/* Content */}
      <div className='relative z-10'>

        {/* Heading */}
        <div className='text-center mb-20'>

          <h1 className='text-6xl md:text-7xl font-bold'>

            Our Portfolio

          </h1>

          <p className='text-yellow-400 mt-6 text-xl'>

            Premium celebrations crafted with perfection.

          </p>

        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>

          {
            works.map((item, index) => (

              <div
                key={index}
                className='bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:scale-105 duration-300 shadow-2xl'
              >

                <img
                  src={item.image}
                  alt=""
                  className='h-[350px] w-full object-cover'
                />

                <div className='p-8'>

                  <h1 className='text-3xl font-bold'>
                    {item.title}
                  </h1>

                  <button className='bg-yellow-400 text-black px-6 py-3 rounded-xl mt-6 font-bold hover:scale-105 duration-300'>

                    View Details

                  </button>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div><Footer/>
</>
  )
}

export default Portfolio