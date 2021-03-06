import React from "react";

export const JoinUs = () => {
  return (
    <section className="bg-join bg-fixed bg-cover my-16 text-white">
      <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-semibold tracking-tight  xl:text-4xl dark:text-white">Join us and get the update from anywhere</h2>

        <div className="mt-8 lg:mt-0">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
            <input id="email" type="text" className="px-4 py-2  border border-gray-300 rounded-md sm:mx-2 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address" />

            <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-primary rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Get Started</button>
          </div>

          <p className="mt-3 text-sm">Attention! Offer expires in 30 days. Make sure not to miss this opportunity</p>
        </div>
      </div>
    </section>
  );
};
