import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
function Contact() {

  return (
<><Navbar/><br />
    <div
      className='min-h-screen bg-cover bg-center relative flex items-center justify-center px-5 py-20'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622')"
      }}
    >

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/80'></div>

      {/* Main Container */}
      <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-7xl'>

        {/* Left Content */}
        <div>

          <h1 className='text-6xl md:text-7xl font-bold text-white leading-tight'>

            Let’s Plan
            <br />

            Your Dream Event ✨

          </h1>

          <p className='text-gray-300 mt-8 text-xl leading-9 max-w-xl'>

            Weddings, birthdays, engagements and premium
            celebrations managed professionally with elegance
            and unforgettable experiences.

          </p>

          {/* Contact Info */}
          <div className='mt-10 flex flex-col gap-5 text-gray-300'>

            <h1 className='text-lg'>
              📍 Thrissur, Kerala
            </h1>

            <h1 className='text-lg'>
              📞 +91 98765 43210
            </h1>

            <h1 className='text-lg'>
              ✉️ contact@eventpro.com
            </h1>

          </div>

        </div>

        {/* Contact Form */}
        <div className='bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl'>

          <h1 className='text-4xl font-bold text-white text-center'>

            Contact Us

          </h1>

          <p className='text-center text-gray-300 mt-4'>

            We’d love to hear from you.

          </p>

          <div className='flex flex-col gap-6 mt-10'>

            <input
              type="text"
              placeholder='Your Name'
              className='bg-white/10 border border-white/20 p-5 rounded-2xl outline-none text-white placeholder:text-gray-300'
            />

            <input
              type="email"
              placeholder='Email Address'
              className='bg-white/10 border border-white/20 p-5 rounded-2xl outline-none text-white placeholder:text-gray-300'
            />

            <textarea
              placeholder='Your Message'
              className='bg-white/10 border border-white/20 p-5 rounded-2xl outline-none h-[180px] text-white placeholder:text-gray-300'
            />

            <button className='bg-yellow-400 text-black py-4 rounded-2xl font-bold hover:scale-105 duration-300'>

              Send Message

            </button>

          </div>

        </div>

      </div>

    </div><Footer/>
    </>

  )
}

export default Contact