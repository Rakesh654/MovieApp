import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovie = () =>{
    const dispatch = useDispatch();

  useEffect(() =>{
    getlatestMovies();
  }, [])

  const getlatestMovies = async () => {
    const movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const moviesObj = await movies.json();
    dispatch(addNowPlayingMovies(moviesObj.results));
  }
}

export default useNowPlayingMovie;