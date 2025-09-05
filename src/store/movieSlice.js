import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: {
    nowPlayingMovieList: null,
    trailerVideo:null
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
    }
  },
});
export const { setMovieList, setLoading, setError ,setTrailerVideo} = moviSlice.actions;
export default moviSlice.reducer;
