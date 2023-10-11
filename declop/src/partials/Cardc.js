import React from "react";

function Cardc({ title, description, imageSrc, isFree }) {
  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105">
      {/* Image */}
      <a className="block focus:outline-none focus-visible:ring-2" href="#0">
        <figure className="relative h-0 pb-[56.25%] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover transition-transform transform hover:scale-105 duration-700 ease-out"
            src={imageSrc}
            alt={title}
          />
        </figure>
      </a>
      {/* Card Content */}
      <div className="p-4">
        {/* Card body */}
        <div>
          {/* Header */}
          <header className="mb-3">
            <a className="block focus:outline-none focus-visible:ring-2" href="#0">
              <h3 className="text-2xl text-gray-900 font-extrabold leading-snug">{title}</h3>
            </a>
          </header>
          {/* Content */}
          <div className="mb-4 text-gray-600">{description}</div>
        </div>
        {/* Card footer */}
        <div className="flex justify-between items-center">
          {isFree ? (
            <span className="text-green-500 font-semibold">Free</span>
          ) : (
            <span className="text-indigo-500 font-semibold">Paid</span>
          )}
          <a className="font-semibold text-sm inline-flex items-center justify-center px-4 py-2 border rounded-lg leading-5 shadow-sm transition-transform transform hover:scale-105 transition duration-300 ease-in-out bg-indigo-500 text-white focus:outline-none focus-visible:ring-2 hover:bg-indigo-600"
            href="#0"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cardc;
