import { useDispatch } from "react-redux";
import { setTopRatedMovies } from "../store/movieSlice";
import { API_OPRIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();
 
   const getMoviesList = async () => {
     try {
       const res = await fetch(
         "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
         API_OPRIONS
       );
       const jsonData = await res.json();
       console.log("topratedMovies********************",jsonData.results);
       dispatch(setTopRatedMovies(jsonData.results));
     } catch (err) {
       console.error("Error fetching movies:", err);
     }
   };
 
   useEffect(() => {
     getMoviesList();
   }, []);
 };
 export default useTopRatedMovies;