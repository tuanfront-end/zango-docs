import React from "react";

const Section5 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
          The New Standard for Design
        </h2>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Use our award-winning tools to help you maximize your profits. We've
          uncovered the correct recipe for converting visitors into customers.
        </p>
        <div className="flex justify-center mt-8 space-x-3">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-700 border border-transparent shadow hover:bg-blue-800 rounded-full"
          >
            Sign Up Today
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-blue-800 bg-blue-200 border border-transparent hover:bg-blue-300 rounded-full"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section5;
