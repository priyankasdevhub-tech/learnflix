import { useEffect } from "react";
import { API_OPRIONS } from "../utils/constants";
import { useSelector } from "react-redux";

import VedioTitle from "../components/VedioTitle";

const MainContainer = () => {
  const movies = useSelector(
    (store) => store.movies?.movieList?.nowPlayingMovieList
  );
  const mainMovie = movies && movies.length > 0 ? movies[0] : null;

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/976573/videos",
          API_OPRIONS
        );
        const movieData = await data.json();
        const filterData = movieData.results.filter(
          (res) => res.type === "Trailer"
        );
        const trailerData = movieData.length
          ? filterData[0]
          : movieData.results[0];

        console.log("trailer***************", filterData[0]);
      } catch (err) {
        console.error("Error fetching movie", err);
      }
    };

    if (mainMovie) {
      getMovie();
    }
  }, [mainMovie]);

  return (
    <div>
      {!mainMovie ? (
        <h2>Loading...</h2>
      ) : (
        <VedioTitle
          title={mainMovie.original_title}
          overView={mainMovie.overview}
        />
      )}
    </div>
  );
};

export default MainContainer;
