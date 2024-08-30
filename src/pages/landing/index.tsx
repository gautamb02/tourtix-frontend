    // import React from 'react'

    // const LandingPageIndex: React.FC = () => {
    //   return (
    //     // <div className='w-5/6 mx-auto'>
    //     //   <h1 className='text-xl font-semibold'>Landing Page</h1>
    //     // </div>
    // <>
    //      <section className="flex flex-col items-center justify-center text-center bg-cover bg-center bg-[url('/path/to/your/image.jpg')] h-96">
    //   <div className="bg-purple-400 bg-opacity-50 p-10 rounded-lg">
    //     <h2 className="text-4xl font-bold text-black mb-4">Discover and Book Your Next Adventure</h2>
    //     <p className="text-yellow mb-6">Explore museums and national parks with our chatbot-based booking system.</p>
    //     <button className="px-8 py-3 bg-purple-500 text-white rounded-full hover:bg-black-300 transition duration-300">Get Started</button>
    //   </div>
    // </section>


    // <section id="features" className="py-16 bg-gray-100">
    //   <div className="container mx-auto px-6">
    //     <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
    //     <div className="flex flex-wrap">
    //       <div className="w-full md:w-1/3 p-4">
    //         <div className="bg-white p-6 rounded-lg shadow-lg">
    //           <h3 className="text-xl font-bold mb-2">Easy Chatbot Interface</h3>
    //           <p>Book your tickets through a simple and intuitive chatbot conversation.</p>
    //         </div>
    //       </div>
    //       <div className="w-full md:w-1/3 p-4">
    //         <div className="bg-white p-6 rounded-lg shadow-lg">
    //           <h3 className="text-xl font-bold mb-2">Multiple Destinations</h3>
    //           <p>Choose from a wide range of museums and national parks.</p>
    //         </div>
    //       </div>
    //       <div className="w-full md:w-1/3 p-4">
    //         <div className="bg-white p-6 rounded-lg shadow-lg">
    //           <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
    //           <p>Pay securely using our integrated payment gateway.</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // <footer className="bg-purple-500 text-white py-6">
    //   <div className="container mx-auto text-center">
    //     <p>&copy; 2024 Museum & Park Bookings. All Rights Reserved.</p>
    //   </div>
    // </footer>
    //   </>
    //   )
    // }

    // export default LandingPageIndex



    import React from 'react';

    const LandingPageIndex: React.FC = () => {
      return (
        <div className="bg-gradient-to-b from-purple-100 to-indigo-200 min-h-screen">
          
    
          <main className="container mx-auto px-6 py-12">
            <section className="text-center mb-20">
              <h1 className="text-5xl font-bold text-indigo-900 mb-4">
                Revolutionize Your Museum Experience
              </h1>
              <p className="text-xl text-indigo-700 mb-8">
                Streamline ticketing with our Online Chatbot-Based Ticket Booking solution
              </p>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg">
                Get Started
              </button>
            </section>
    
            <section id="features" className="mb-20">
              <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: 'bx-chat', title: '24/7 Availability', description: 'Round-the-clock ticketing and support' },
                  { icon: 'bx-line-chart', title: 'Efficient Queuing', description: 'Reduce wait times and manage peak hours' },
                  { icon: 'bx-world', title: 'Multilingual Support', description: 'Cater to international visitors' },
                  { icon: 'bx-analyse', title: 'Data Analytics', description: 'Gain insights for better decision-making' },
                ].map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                    <i className={`bx ${feature.icon} text-4xl text-indigo-600 mb-4`}></i>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
    
            <section id="benefits" className="mb-20">
              <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">Benefits</h2>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    'Improved visitor satisfaction',
                    'Reduced operational costs',
                    'Increased ticket sales',
                    'Enhanced marketing capabilities',
                    'Streamlined entry process',
                    'Valuable visitor insights',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <i className='bx bx-check-circle text-2xl text-green-500 mr-3'></i>
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    
            <section id="contact" className="text-center">
              <h2 className="text-3xl font-bold text-indigo-800 mb-6">Ready to Transform Your Museum?</h2>
              <p className="text-xl text-indigo-700 mb-8">
                Contact us today to learn how TourTix can revolutionize your ticketing process
              </p>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg">
                Contact Us
              </button>
            </section>
          </main>
    
          <footer className="bg-indigo-900 text-white py-8">
            <div className="container mx-auto px-6 text-center">
              <p>&copy; 2024 TourTix . All rights reserved.</p>
            </div>
          </footer>
        </div>
      );
    };
    
    export default LandingPageIndex;