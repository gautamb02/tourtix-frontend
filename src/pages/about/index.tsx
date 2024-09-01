
import React from 'react';
import { Link } from 'react-router-dom';

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
          <h1 className="text-4xl font-extrabold text-indigo-800 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Revolutionizing Museum Ticketing
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-indigo-500">
            Our AI-powered chatbot streamlines ticket booking, enhancing the museum experience for visitors and staff alike.
          </p>
        </div>
        
        {/* // Call to Action */}

        <div className="mt-5 bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-3">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-indigo-800 sm:text-4xl">
                <span className="block">Ready to transform</span>
                <span className="block">your museum experience?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-500">
                Our chatbot ticketing system offers a seamless, efficient, and intelligent solution for museums of all sizes. From gate entry to show bookings, we've got you covered.
              </p>
              <Link
                to="#"
                className="mt-8 bg-indigo-500 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-white hover:bg-indigo-700"
              >
                Get Started
              </Link>
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
            <h2 className="text-3xl mb-4 font-extrabold text-indigo-900 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature, idx) => (
              <div key={idx+1} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
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
