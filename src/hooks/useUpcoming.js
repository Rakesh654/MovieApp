import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcoming = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
      getlatestMovies();
    }, [])
  
    const getlatestMovies = async () => {
      const movies = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
      const moviesObj = await movies.json();
      dispatch(addUpcomingMovies(moviesObj.results));
    }
}

export default useUpcoming;
