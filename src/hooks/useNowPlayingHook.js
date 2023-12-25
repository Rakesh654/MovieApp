import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovie = () =>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies)

  useEffect(() =>{
    !nowPlayingMovies && getlatestMovies();
  }, [])

  const getlatestMovies = async () => {
    const movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const moviesObj = await movies.json();
    dispatch(addNowPlayingMovies(moviesObj.results));
  }
}

export default useNowPlayingMovie;