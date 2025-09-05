import React from "react";

// Reusable Horizontal List Component
const HorizontalList = ({ title, data }) => {
    return (
      <div className="px-6 py-4">
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h2>
  
        {/* Horizontal Scroll */}
        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
          {data.map((item, index) => (
            <div
              key={index}
              className="min-w-[180px] md:min-w-[220px] cursor-pointer transform hover:scale-105 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 md:h-56 object-cover rounded-md"
              />
              <p className="text-sm md:text-base text-gray-300 mt-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default HorizontalList;
