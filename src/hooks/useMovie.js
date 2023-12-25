import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addMovieVideos } from '../utils/moviesSlice';

const useMovie = (movieid) =>  {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies?.moviesVideos)
    useEffect(() =>{
        !movies && getMovie();
    }, [])
  
    const getMovie = async () =>{
       const data = await fetch('https://api.themoviedb.org/3/movie/'+movieid+'/videos?language=en-US', API_OPTIONS)
       const json = await data.json();
       const movie = json.results; 
       dispatch(addMovieVideos(movie));
    }
}

export default useMovie;