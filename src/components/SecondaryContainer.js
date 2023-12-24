import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const nowPlayingMovie = useSelector(store => store.movies?.nowPlayingMovies);
  const popular = useSelector(store => store.movies?.popularMovies);
  const topRated = useSelector(store => store.movies?.topRatedMovies);
  const upcoming = useSelector(store => store.movies?.upcomingMovies);
  return (
    <div className='bg-black'>
    {nowPlayingMovie !== null ? <MovieList title="Now Playing" movies={nowPlayingMovie}/> : ""}
    {topRated !== null ? <MovieList title="Top Rated" movies={topRated}/> : ""}
    {popular !== null ? <MovieList title="Popular" movies={popular}/> : ""}
    {upcoming !== null ? <MovieList title="Upcoming" movies={upcoming}/> : ""}
    </div>
  )
}

export default SecondaryContainer;