import React from "react";

const HelloWorld = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Hello World!
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Welcome to my first React application
        </p>
        <div className="mt-6 flex justify-center">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300">
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
