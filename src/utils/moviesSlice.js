import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        moviesVideos : null
    },
    reducers: {
        addNowPlayingMovies(state, action){
            state.nowPlayingMovies = action.payload;
        },
        addMovieVideos(state, action){
             state.moviesVideos = action.payload;   
        }
    }
})

export const {addNowPlayingMovies, addMovieVideos} = moviesSlice.actions;
export default moviesSlice.reducer