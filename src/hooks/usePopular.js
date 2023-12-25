import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/moviesSlice';

function usePopular() {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies?.popularMovies)

    useEffect(() =>{
      !popularMovies && getlatestMovies();
    }, [])
  
    const getlatestMovies = async () => {
      const movies = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
      const moviesObj = await movies.json();
      dispatch(addPopularMovies(moviesObj.results));
    }
}

export default usePopular