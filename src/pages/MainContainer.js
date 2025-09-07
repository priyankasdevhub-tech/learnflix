import { useEffect } from "react";
import { API_OPRIONS } from "../utils/constants";
import { useSelector } from "react-redux";

import VedioTitle from "../components/VedioTitle";
import HorizontalList from "../components/HorizontalList";
import VedioBg from "../components/VedioBg";
import MovieList from "../components/MovieList";
import SecondaryContainer from "./SecondContainer";


const MainContainer = () => {
  const movies = useSelector(
    (store) => store.movies?.movieList?.nowPlayingMovieList
  );
  
  const mainMovie = movies && movies.length > 0 ? movies[0] : null;

  if (!mainMovie) {
    return <div>Loading...</div>;
  }
  const {original_title,overview,id}=mainMovie

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VedioTitle title={original_title} overView={overview} />
      <VedioBg  movieId={id}  />
    
    </div>
  );
};

export default MainContainer;
