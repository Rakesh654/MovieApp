import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

const useSearch = (movieName) => {

    useEffect(() =>{
        searchMovie();        
    }, [])

    const searchMovie = async () =>{
        const searchMovie =  await fetch('https://api.themoviedb.org/3/search/movie?query=' + movieName +'include_adult=true', API_OPTIONS);
        const json = await searchMovie.json();
        console.log(json);    
    }
}

export default useSearch;