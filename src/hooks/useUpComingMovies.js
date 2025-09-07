import { useDispatch } from "react-redux";
import { setUpComingMovies } from "../store/movieSlice";
import { API_OPRIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
 
   const getMoviesList = async () => {
     try {
       const res = await fetch(
         "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
         API_OPRIONS
       );
       const jsonData = await res.json();
       console.log("upComingMovieList=======",jsonData.results);
       dispatch(setUpComingMovies(jsonData.results));
     } catch (err) {
       console.error("Error fetching movies:", err);
     }
   };
 
   useEffect(() => {
     getMoviesList();
   }, []);
 };
 export default useUpcomingMovies;