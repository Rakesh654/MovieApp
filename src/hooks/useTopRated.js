import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

function useTopRated() {
    const dispatch = useDispatch();
    const topRated = useSelector(store => store.movies?.topRated)

    useEffect(() =>{
      !topRated && getlatestMovies();
    }, [])
  
    const getlatestMovies = async () => {
      const movies = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
      const moviesObj = await movies.json();
      dispatch(addTopRatedMovies(moviesObj.results));
    }
}

export default useTopRated