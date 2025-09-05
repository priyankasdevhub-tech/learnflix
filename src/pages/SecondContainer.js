
import React from "react";
import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer=()=>{
  const moviData=useSelector((store)=> store.movies?.movieList?.nowPlayingMovieList)

  
  return(
    <div className=" bg-black ">
    <div><MovieList title={"Now Playing"} moviData={moviData}/></div>,
    <div><MovieList title={"Trending"} moviData={moviData}/></div>,
    <div><MovieList title={"Comedy"} moviData={moviData}/></div>,
    <div><MovieList title={"Horror"} moviData={moviData}/></div>,
    <div><MovieList title={"Action & Adventure"} moviData={moviData}/></div>
    </div>

  )
}
export default SecondaryContainer;