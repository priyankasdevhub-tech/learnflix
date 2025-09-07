import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTrailerVd from "../hooks/useTrailerVd";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMoviies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpComingMovies";
import SecondaryContainer from "./SecondContainer";


const Browse = () => {
  // 👇 get user from redux store
  useNowPlayingMovies();
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  
  return (
    <div className="flex w-screen justify-between  flex-col absolute ">
      <Header />
    <MainContainer />
    <SecondaryContainer/>
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
