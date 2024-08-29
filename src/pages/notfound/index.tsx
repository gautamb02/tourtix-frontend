// import React from 'react';

// const NotFoundIndex: React.FC = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="text-center">
//         <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
//         <h2 className="text-2xl font-semibold text-gray-600 mb-6">Oops! Page Not Found</h2>
//         <p className="text-lg text-gray-500 mb-8">
//           The page you’re looking for doesn’t exist or has been moved.
//         </p>
//         <a
//           href="/"
//           className="inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300"
//         >
//           Go Home
//         </a>
//       </div>
//     </div>
//   );
// };

// export default NotFoundIndex;


import React from 'react';

const NotFoundIndex: React.FC = () => {
  return (
    <section className="page_404 py-10 bg-white font-serif">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="col-sm-10 col-sm-offset-1 text-center">
            <div className="four_zero_four_bg bg-[url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')] h-[400px] bg-center bg-cover">
              <h1 className="text-center text-8xl">404</h1>
            </div>

            <div className="contant_box_404 mt-[-50px]">
              <h3 className="text-8xl mb-4 ">Look like you're lost</h3>
              <p>The page you are looking for is not available!</p>
              <a href="/" className="link_404 text-white bg-green-600 px-5 py-2 mt-5 inline-block">
                Go to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundIndex;