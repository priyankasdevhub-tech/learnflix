import React from "react";

const VedioTitle = ({ title, overView }) => {
  return (
    <div className="flex flex-col lg:flex-row mt-32 lg:mt-56 w-screen lg:justify-between px-6 lg:px-16 absolute text-white">
      
      {/* Title + Overview + Buttons */}
      <div className="lg:w-2/4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {title}
        </h1>

        <p className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg">
          {overView}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row mt-6 md:mt-10 gap-4">
          <button
            className="bg-white text-black px-8 py-2 md:px-10 md:py-3 rounded-md font-bold"
            aria-label="Play"
          >
            ▶️ Play
          </button>

          <button className="bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(109,109,110,0.5)] text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-semibold flex items-center gap-2">
            <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 border border-white rounded-full text-xs md:text-sm">
              i
            </span>
            More Info
          </button>
        </div>
      </div>

      {/* Rating Section */}
      <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end items-center">
        <p className="px-6 py-2 text-sm md:text-base text-white bg-[linear-gradient(to_right,white_3%,rgba(51,51,51,0.6)_3%,rgba(51,51,51,0.6)_100%)]">
          U/A 16+
        </p>
      </div>
    </div>
  );
};

export default VedioTitle;
