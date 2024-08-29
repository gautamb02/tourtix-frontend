// import React from 'react';

// const AboutPage: React.FC = () => {
//   return (
//     <div className="bg-lavender-50 min-h-screen">
//       <div className="container mx-auto p-6">
//         <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">About Our Chatbot Ticketing System</h1>
//         <p className="text-xl text-center mb-10 text-purple-700 max-w-3xl mx-auto">
//           Our innovative chatbot-based ticketing system is designed to enhance the visitor experience at museums by streamlining the ticket booking process.
//         </p>

//         <div className="mb-5 text-center bg-purple-100 rounded-lg p-8 shadow-lg">
//           <h2 className="text-3xl font-semibold mb-6 text-purple-800">Join Us in Revolutionizing Museum Visits!</h2>
//           <p className="text-xl text-purple-700 max-w-2xl mx-auto">
//             Experience the future of ticket booking with our chatbot solution. Say goodbye to long queues and hello to convenience!
//           </p>
//           <button className="mt-8 bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
//             Learn More
//           </button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white shadow-lg rounded-lg p-8 border-t-4 border-purple-500 transform hover:scale-105 transition-transform duration-300">
//             <h2 className="text-2xl font-semibold mb-6 text-purple-700">Key Benefits</h2>
//             <ul className="space-y-4">
//               {[
//                 { icon: 'bx-smile', text: 'Improved Customer Service' },
//                 { icon: 'bx-smile', text: 'Efficient Handling of High Volumes' },
//                 { icon: 'bx-wallet', text: 'Cost-Effective Solution' },
//                 { icon: 'bx-data', text: 'Data Collection and Analysis' },
//                 { icon: 'bx-accessibility', text: 'Accessibility' },
//                 { icon: 'bx-error-circle', text: 'Reduced Human Error' },
//                 { icon: 'bx-globe', text: 'Multilingual Support' },
//                 { icon: 'bx-store-alt', text: 'Enhanced Marketing and Promotion' },
//               ].map((item, index) => (
//                 <li key={index} className="flex items-center">
//                   <i className={`bx ${item.icon} mr-3 text-purple-500 text-xl`}></i>
//                   <span className="text-purple-800">{item.text}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg p-8 border-t-4 border-purple-500 transform hover:scale-105 transition-transform duration-300">
//             <h2 className="text-2xl font-semibold mb-6 text-purple-700">Our Solution</h2>
//             <p className="mb-6 text-purple-800 leading-relaxed">
//               Our chatbot provides a seamless ticket booking experience, allowing visitors to easily book tickets for gate entry and shows without the need for human intervention.
//             </p>
//             <p className="text-purple-800 leading-relaxed">
//               With an integrated payment gateway, users can complete their transactions securely and efficiently. Our system also offers analytics to help museums make informed decisions.
//             </p>
//           </div>
//         </div>

        
//       </div>
      
//     </div>
//   );
// };

// export default AboutPage;



import React from 'react';

const AboutPage: React.FC = () => {
  const features = [
    { icon: 'bx-smile', title: 'Improved Customer Service', description: 'Enhance visitor satisfaction with quick, efficient service.' },
    { icon: 'bx-run', title: 'Efficient Handling of High Volumes', description: 'Manage peak hours and special events with ease.' },
    { icon: 'bx-dollar-circle', title: 'Cost-Effective Solution', description: 'Reduce operational costs associated with manual ticketing.' },
    { icon: 'bx-bar-chart-alt-2', title: 'Data Collection and Analysis', description: 'Gain valuable insights for informed decision-making.' },
    { icon: 'bx-universal-access', title: 'Accessibility', description: 'Provide 24/7 ticket booking service to visitors.' },
    { icon: 'bx-check-shield', title: 'Reduced Human Error', description: 'Minimize mistakes in ticket issuance and bookings.' },
    { icon: 'bx-world', title: 'Multilingual Support', description: 'Cater to diverse visitors with multiple language options.' },
    { icon: 'bx-bullseye', title: 'Enhanced Marketing and Promotion', description: 'Leverage chatbot for targeted marketing campaigns.' },
  ];

  return (
    <div className="bg-indigo-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-purple-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Revolutionizing Museum Ticketing
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-purple-500">
            Our AI-powered chatbot streamlines ticket booking, enhancing the museum experience for visitors and staff alike.
          </p>
        </div>
        
        {/* // Call to Action */}

        <div className="mt-5 bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-3">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-indigo-900 sm:text-4xl">
                <span className="block">Ready to transform</span>
                <span className="block">your museum experience?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-500">
                Our chatbot ticketing system offers a seamless, efficient, and intelligent solution for museums of all sizes. From gate entry to show bookings, we've got you covered.
              </p>
              <a
                href="#"
                className="mt-8 bg-purple-500 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-white hover:bg-indigo-700"
              >
                Get Started
              </a>
            </div>
          </div>
          
          <div className="flex space-x-4 justify-center items-center ">

          <img
              className="object-cover h-96 rounded-3xl "
              src="https://i.postimg.cc/FzP7gQ1p/Screenshot-2024-08-29-at-11-26-03-PM.png"
              alt="App screenshot"
            />

            <img
              className="object-cover h-96 rounded-3xl "
              src="https://i.postimg.cc/PxgDvHpw/Screenshot-2024-08-29-at-11-11-32-PM.png"
              alt="App screenshot"
            />
            <img
              className="object-cover h-96 rounded-3xl "
              src="https://i.postimg.cc/MpzzZLTK/Screenshot-2024-08-29-at-11-31-23-PM.png"
              alt="App screenshot"
            />
            
            
      </div>
        
        </div>

        {/* // Key Benefits */}
        <div className="mt-16">
            <h2 className="text-3xl mb-4 font-extrabold text-purple-900 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-purple-500 rounded-md shadow-lg">
                        <i className={`bx ${feature.icon} text-white text-3xl`}></i>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>

     
    </div>
  );
};

export default AboutPage;