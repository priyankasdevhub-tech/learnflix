import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTrailerVideo } from "../store/movieSlice";
import { API_OPRIONS } from "../utils/constants";

 const useTrailerVd =  (movieId) => {


const dispatch = useDispatch();
  const getTrailerVd=async()=>{
   
    try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId+"/videos",
          API_OPRIONS
        );
        const movieData = await data.json();
        const filterData = movieData.results.filter(
          (res) => res.type === "Trailer"
        );
        const trailerData = movieData.length
          ? filterData[0]
          : movieData.results[1];
    
          dispatch(setTrailerVideo(trailerData))
       ;
      } catch (err) {
        console.error("Error fetching movie", err);
      }

}
  
useEffect(()=>{
    getTrailerVd()

},[])
}
export default useTrailerVd