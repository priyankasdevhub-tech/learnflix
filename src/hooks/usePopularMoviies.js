import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPRIONS } from "../utils/constants";
import { setPopularMovies } from "../store/movieSlice";

 const usePopularMovies = () => {

   const dispatch = useDispatch();

  const getMoviesList = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPRIONS
      );
      const jsonData = await res.json();
      console.log(jsonData.results);
      dispatch(setPopularMovies(jsonData.results));
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  useEffect(() => {
    getMoviesList();
  }, []);
};
export default usePopularMovies;






