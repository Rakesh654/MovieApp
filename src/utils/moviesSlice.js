import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        moviesVideos : null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        searchMovie: null
    },
    reducers: {
        addNowPlayingMovies(state, action){
            state.nowPlayingMovies = action.payload;
        },
        addMovieVideos(state, action){
             state.moviesVideos = action.payload;   
        },
        addPopularMovies(state, action){
            state.popularMovies = action.payload;
        },
        addTopRatedMovies(state, action){
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies(state, action){
            state.upcomingMovies = action.payload;
        },
        addSearchMovie(state, action){
            state.searchMovie = action.payload;
        },
    }
})

export const {addNowPlayingMovies, addMovieVideos, addPopularMovies, addTopRatedMovies,addUpcomingMovies, addSearchMovie} = moviesSlice.actions;
export default moviesSlice.reducer