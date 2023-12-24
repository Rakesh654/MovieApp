import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title, movies}) {
    console.log(movies);    
  return (
    <div className='pt-6 -mt-60 pl-20 relative z-50'>
    <h1 className='text-3xl font-medium pb-2 pl-2 text-white'>{title}</h1>
    <div className='w-11/12 flex overflow-x-scroll'>
     <div className='flex'>
        {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path}/>
        ))}
    </div>
    </div>
    </div>
  )
}

export default MovieList