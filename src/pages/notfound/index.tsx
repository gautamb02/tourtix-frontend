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
              <h3 className="text-8xl">Look like you're lost</h3>
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
