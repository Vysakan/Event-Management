import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import homeimg from '../assets/homeimg.jpg'
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

    <div className='min-h-screen bg-black'>
<Navbar />
      {/* Navbar */}
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

      {/* Hero Section */}
      <div
  className='h-screen bg-cover bg-center flex items-center justify-center relative'
  style={{
    backgroundImage: `url(${homeimg})`
  }}
>

        <div className='absolute inset-0 bg-black/60'></div>

        <div className='relative z-10 text-center px-5 text-white'>

          <h1 className='text-6xl md:text-8xl font-bold leading-tight'>

            Make Your Events
            <br />

            Magical ✨

          </h1>

          <p className='text-gray-300 mt-8 text-xl max-w-[800px] mx-auto leading-9'>

            Book premium wedding, birthday, engagement,
            house warming and luxury event management services.

          </p>

          <button
            onClick={() => navigate('/event-details')}
            className='bg-yellow-400 text-black px-10 py-5 rounded-2xl font-bold mt-10 hover:scale-105 duration-300'
          >

            Explore Events

          </button>

        </div>

      </div>

      {/* Event Section */}
      <div
        className='px-10 py-24 bg-cover bg-center relative'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')"
        }}
      >

        <div className='absolute inset-0 bg-black/70'></div>

        <div className='relative z-10'>

          <div className='text-center mb-16 text-white'>

            <h1 className='text-5xl font-bold'>
              Popular Events
            </h1>

            <p className='text-gray-300 mt-5 text-lg'>

              Choose your perfect celebration package.

            </p>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>

            {
              events.map((item, index) => (

                <div
                  key={index}
                  className='bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:scale-105 duration-300'
                >

                  <img
                    src={item.image}
                    alt=""
                    className='h-[250px] w-full object-cover'
                  />

                  <div className='p-6 text-white'>

                    <h1 className='text-2xl font-bold'>
                      {item.title}
                    </h1>

                    <h1 className='text-yellow-400 text-2xl font-semibold mt-3'>
                      {item.price}
                    </h1>

                    <button
                      onClick={() => navigate('/event-details')}
                      className='bg-yellow-400 text-black w-full py-3 rounded-xl mt-6 font-bold hover:scale-105 duration-300'
                    >

                      Book Now

                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        </div>

      </div>

      {/* About Section */}
      <div
        className='py-24 px-10 text-center text-white bg-cover bg-center relative'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520854221256-17451cc331bf')"
        }}
      >

        <div className='absolute inset-0 bg-black/80'></div>

        <div className='relative z-10'>

          <h1 className='text-5xl font-bold'>
            About EventPro
          </h1>

          <p className='text-gray-300 mt-6 max-w-3xl mx-auto text-lg leading-9'>

            We help people create unforgettable weddings,
            birthdays and premium celebrations with the
            best event management companies.

          </p>

          <button
            onClick={() => navigate('/about')}
            className='bg-yellow-400 text-black px-8 py-4 rounded-2xl mt-10 font-bold hover:scale-105 duration-300'
          >

            Learn More

          </button>

        </div>

      </div>

      {/* Portfolio Section */}
      <div
        className='py-24 px-10 text-center text-white bg-cover bg-center relative'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505236858219-8359eb29e329')"
        }}
      >

        <div className='absolute inset-0 bg-black/75'></div>

        <div className='relative z-10'>

          <h1 className='text-5xl font-bold'>
            Our Portfolio
          </h1>

          <p className='text-gray-300 mt-5 text-lg'>
            Premium events crafted beautifully.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-14'>

            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552"
              alt=""
              className='rounded-3xl h-[300px] w-full object-cover hover:scale-105 duration-300'
            />

            <img
              src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3"
              alt=""
              className='rounded-3xl h-[300px] w-full object-cover hover:scale-105 duration-300'
            />

            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
              alt=""
              className='rounded-3xl h-[300px] w-full object-cover hover:scale-105 duration-300'
            />

          </div>

          <button
            onClick={() => navigate('/portfolio')}
            className='bg-yellow-400 text-black px-8 py-4 rounded-2xl mt-10 font-bold hover:scale-105 duration-300'
          >

            View Portfolio

          </button>

        </div>

      </div>

      {/* Contact Section */}
      <div
        className='py-24 px-10 text-center text-white bg-cover bg-center relative'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511578314322-379afb476865')"
        }}
      >

        <div className='absolute inset-0 bg-black/80'></div>

        <div className='relative z-10'>

          <h1 className='text-5xl font-bold'>
            Contact Us
          </h1>

          <p className='text-gray-300 mt-6 text-lg'>
            Let’s plan your dream event together.
          </p>

          <button
            onClick={() => navigate('/contact')}
            className='bg-yellow-400 text-black px-8 py-4 rounded-2xl mt-10 font-bold hover:scale-105 duration-300'
          >

            Contact Now

          </button>

        </div>

      </div>

      {/* Footer */}
     
<Footer />
    </div>

  )
}

export default LandingPage