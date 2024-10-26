import React from 'react';

export default function DeathPredictor() {
  return (
    <div className="">
      <div className="w-full  p-6 bg-white rounded-lg shadow-lg">
        {/* Background Image with Overlay */}
        <div
          className="relative h-48 bg-cover bg-center rounded-t-lg"
          style={{
            backgroundImage: 'url("YOUR_IMAGE_URL_HERE")', 
          }}
        >
          <div className="absolute inset-0 bg-red-900 opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-2xl font-bold text-white">Death Predictor</h1>
          </div>
        </div>

        {/* Form Section */}
        <div className="px-8 py-6 bg-white rounded-b-lg">
          <form>
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Date of Birth Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
                Date of Birth
              </label>
              <input
                type="text"
                id="dob"
                placeholder="dd/mm/yyyy"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Gender Input */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                Gender
              </label>
              <input
                type="text"
                id="gender"
                placeholder="Enter your Gender"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="button"
                className="w-full py-2 px-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition ease-in-out duration-300"
              >
                Swipe to Predict
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
