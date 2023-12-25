import React, { useRef } from 'react'
import { API_OPTIONS, BACKGROUND_URL } from '../utils/constants'
import { lang } from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchMovie } from '../utils/moviesSlice';
import MovieList from './MovieList';

function GptSearch() {
    const langkey = useSelector(store => store.lang.lang).toLowerCase();
    const key = langkey === "english" ? "en" : langkey;
    const searchItem = useRef();
    const dispatch = useDispatch();
    const searchMovies = useSelector(store => store.movies?.searchMovie);
    const allSearchMovies = searchMovies != null ? searchMovies.filter((e) => e.poster_path != null) : null;

    const searchMovie = async () => {
        const searchMovie =  await fetch('https://api.themoviedb.org/3/search/movie?query=' + searchItem.current.value +'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await searchMovie.json();
        dispatch(addSearchMovie(json.results))
    }
  return (
    <div>
    <div>
    <img className='h-screen w-screen object-cover absolute -z-10' alt='loading' src={BACKGROUND_URL}></img>
    </div>
    <div className='pt-[30%] md:pt-[10%] flex justify-center'>
       <div className='p-5 bg-black rounded-lg'>
        <form onSubmit={(e) => e.preventDefault()} className='bg-black w-screen md:w-full '>
            <input type='text' ref={searchItem} className='border border-black p-3 w-80 md:w-96' placeholder={lang[key].SEARCH_PLACEHOLDER}></input>
            <button className='bg-red-700 text-white mx-10 p-4 rounded-md' onClick={(searchMovie)}>{lang[key].SEARCH}</button>
        </form>
        </div>
    </div>
    {allSearchMovies !== null  || (allSearchMovies !== null && allSearchMovies.length !== 0)  ?
    <div className='pt-[40%] md:pt-[14%] bg-gradient-to-br from-black'>
    <MovieList title={searchItem?.current?.value.toUpperCase()} movies={allSearchMovies}/>
    </div> 
    : ""}
    </div>
  )
}

export default GptSearch