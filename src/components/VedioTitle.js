import React from "react";

const VedioTitle = ({ title, overView }) => {
  return (
    <div className=" pt-56 m-32 w-1/4">
      <h1 className=" text-2xl font-bold"> {title}</h1>
      <p className=" mt-6">{overView}</p>

      <div>
        <button>Play</button>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default VedioTitle;
