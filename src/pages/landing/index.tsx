    import React from 'react'

    const LandingPageIndex: React.FC = () => {
      return (
        // <div className='w-5/6 mx-auto'>
        //   <h1 className='text-xl font-semibold'>Landing Page</h1>
        // </div>
    <>
         <section className="flex flex-col items-center justify-center text-center bg-cover bg-center bg-[url('/path/to/your/image.jpg')] h-96">
      <div className="bg-purple-400 bg-opacity-50 p-10 rounded-lg">
        <h2 className="text-4xl font-bold text-black mb-4">Discover and Book Your Next Adventure</h2>
        <p className="text-yellow mb-6">Explore museums and national parks with our chatbot-based booking system.</p>
        <button className="px-8 py-3 bg-purple-500 text-white rounded-full hover:bg-black-300 transition duration-300">Get Started</button>
      </div>
    </section>


    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Easy Chatbot Interface</h3>
              <p>Book your tickets through a simple and intuitive chatbot conversation.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Multiple Destinations</h3>
              <p>Choose from a wide range of museums and national parks.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p>Pay securely using our integrated payment gateway.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="bg-purple-500 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Museum & Park Bookings. All Rights Reserved.</p>
      </div>
    </footer>
      </>
      )
    }

    export default LandingPageIndex
