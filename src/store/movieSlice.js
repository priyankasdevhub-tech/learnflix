import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    movieList: {
      nowPlayingMovieList:null
    },
    loading: false,
    error: null,
  };


  const moviSlice =createSlice({
    name:"movies",
    initialState,
    reducers:{
      setMovieList:(state,action)=>{
        state.movieList.nowPlayingMovieList=action.payload
      },
      setLoading:(state,action)=>{
        state.loading=action.payload
      },
      setError:(state,action)=>{
        state.error=action.payload
      }

    }
  })
  export const {setMovieList,setLoading,setError}=moviSlice.actions
  export default  moviSlice.reducer;