import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: {
    nowPlayingMovieList: null,
    trailerVideo:null,
    popularMovieList:null,
    topRatedMovieList:null,
    upComingMovieList:null
  },
  loading: false,
  error: null,
};

const moviSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovieList: (state, action) => {
      state.movieList.nowPlayingMovieList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setTrailerVideo:(state,action)=>{
      state.movieList.trailerVideo=action.payload
    },
    setPopularMovies:(state,action)=>{
      state.movieList.popularMovieList=action.payload
    },
    setTopRatedMovies:(state,action)=>{
      state.movieList.topRatedMovieList=action.payload
    },
    setUpComingMovies:(state,action)=>{
      state.movieList.upComingMovieList=action.payload
    }
  },
});
export const { setMovieList, setLoading, setError ,setTrailerVideo,setPopularMovies,setTopRatedMovies,setUpComingMovies} = moviSlice.actions;
export default moviSlice.reducer;
