import React from 'react';
import { ChevronRight, MessageCircle, Clock, Globe, Zap } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-indigo-300 min-h-screen">
      
      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-20">
          <h1 className="text-6xl font-bold text-indigo-900 mb-4">
            Book Museum Tickets in Seconds
          </h1>
          <p className="text-xl text-indigo-700 mb-8 max-w-2xl mx-auto">
            AI-Powered Chatbot for Seamless Museum Experiences
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg flex items-center transform hover:scale-105">
              Get Started <ChevronRight className="ml-2" size={20} />
            </button>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-100 transition duration-300 shadow-lg transform hover:scale-105">
              Watch Demo
            </button>
          </div>
        </section>

        <section id="features" className="mb-20">
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-10">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MessageCircle, title: 'AI-Powered Chatbot', description: 'Intelligent conversations for quick bookings' },
              { icon: Clock, title: '24/7 Availability', description: 'Book tickets anytime, anywhere' },
              { icon: Globe, title: 'Multilingual Support', description: 'Cater to visitors from around the world' },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
                <feature.icon className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="demo" className="mb-20">
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-10">See TourTix in Action</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/api/placeholder/600/400"
                alt="TourTix Demo" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold mb-4">Effortless Booking Process</h3>
              <ul className="space-y-4">
                {[
                  'Natural language interactions',
                  'Instant ticket generation',
                  'Seamless payment integration',
                  'Real-time availability updates'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Zap className="w-5 h-5 text-indigo-600 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-bold text-indigo-800 mb-6">Ready to Revolutionize Your Museum?</h2>
          <p className="text-xl text-indigo-700 mb-8">
            Let's discuss how TourTix can transform your ticketing experience
          </p>
          <form className="max-w-lg mx-auto">
            <input type="email" placeholder="Your email" className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" />
            <textarea placeholder="Your message" rows={4} className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"></textarea>
            <button type="submit" className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg w-full transform hover:scale-105">
              Get in Touch
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-indigo-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 TourTix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;