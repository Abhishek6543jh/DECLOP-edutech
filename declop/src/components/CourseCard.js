// CourseCard.js
import React from 'react';

const CourseCard = () => {
  return (
    <div className="course-card bg-white shadow-lg rounded-lg overflow-hidden animate slide-in-left">
      <img src="Abstract-3d-art-background.png" alt="Course Image" className="w-1/2 h-auto" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Course Title</h3>
        <p className="text-gray-600 mb-4">Description of the course...</p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-blue-500">$99.99</p>
          <a href="#" className="btn bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out">Apply</a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
