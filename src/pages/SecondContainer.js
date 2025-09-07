
import React from "react";
import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer=()=>{
  const nowPlayingVd=useSelector((store)=> store.movies?.movieList?.nowPlayingMovieList)
  const popularVd=useSelector((store)=> store.movies?.movieList?.popularMovieList)
  const topRatedVd=useSelector((store)=> store.movies?.movieList?.topRatedMovieList)
  const upComingVd=useSelector((store)=> store.movies?.movieList?.upComingMovieList)

  
  return(
    <div className="bg-black">
    <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
    <div><MovieList title={"Now Playing"} moviData={nowPlayingVd}/></div>,
    <div><MovieList title={"Top Rated"} moviData={topRatedVd}/></div>,
 
    {/* <div className=" bg-black "> */}
    <div><MovieList title={"Popular"} moviData={popularVd}/></div>,
    <div><MovieList title={"UpComing"} moviData={upComingVd}/></div>,
    {/* </div> */}
    </div>

    </div>

  )
}
export default SecondaryContainer;