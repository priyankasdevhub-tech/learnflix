import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  // 👇 get user from redux store
  useNowPlayingMovies();

  return (
    <div className="flex w-screen justify-between  flex-col ">
      <Header />

      <MainContainer />

      {/* 
      -BannerView
        vedioBgView
        vedioTitle

        -mainCintainer 
          -moviList * n
          -cards * n
*/}
    </div>
  );
};

export default Browse;
