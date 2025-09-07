import React from "react";

const VedioTitle = ({ title, overView }) => {
  return (
    <div className="flex flex-col lg:flex-row mt-32 lg:mt-56 w-screen lg:justify-between  lg:px-16 absolute text-white ">
      
      {/* Title + Overview + Buttons */}
      <div className="lg:w-2/4 space-y-4 " >
        <h1  className="font-bold leading-tight text-3xl 
             transition-transform duration-300 
             hover:scale-125 cursor-pointer origin-left  hover:text-5xl">
          {title}
        </h1>

        <div className=" bottom-12 left-12 max-w-sm text-white">
  <p className="text-lg leading-tight">
    {overView}
  </p>
</div>
        {/* <p className="mt-4 md:mt-6 text-lg md:text-base lg:text-lg max-w-xl leading-relaxed">
          {overView}
        </p> */}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row mt-6 md:mt-10 gap-4 py-2 ">
  {/* Play Button */}
  <button
    className="flex items-center gap-2 bg-white text-black 
               px-6 py-2 md:px-8 md:py-2.5 
               rounded-md font-semibold hover:bg-gray-200 transition text-base"
    aria-label="Play"
  >
    {/* Play Icon */}
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" />
    </svg>

    Play
  </button>

  {/* More Info Button */}
  <button
    type="button"
    className="flex items-center gap-2 bg-[rgba(109,109,110,0.7)] 
               hover:bg-[rgba(109,109,110,0.5)] 
               text-white px-5 py-2 md:px-6 md:py-2.5 
               rounded-md font-medium transition"
    aria-label="More Info"
  >
    {/* Circle I Icon */}
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 
           6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 
           6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 
           12 0C18.6274 0 24 5.37258 24 12C24 18.6274 
           18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 
           10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 
           13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 
           5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 
           8.5 12 8.5Z"
      />
    </svg>

    <span className="text-sm md:text-base">More Info</span>
  </button>
</div>

      </div>

      {/* Rating Section */}
      <div className="lg:mt-0 flex justify-center lg:justify-end items-center -mr-16 -my-64 ">
        <p className="px-12 py-2 text-sm md:text-base text-white bg-[linear-gradient(to_right,white_3%,rgba(51,51,51,0.6)_3%,rgba(51,51,51,0.6)_100%)] bg-opacity-0">
          U/A 16+
        </p>
      </div>
    </div>
  );
};

export default VedioTitle;
