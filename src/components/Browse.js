import React from 'react'
import Header from './Header';
import useNowPlayingMovie from '../hooks/useNowPlayingHook';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopular from '../hooks/usePopular';
import useUpcoming from '../hooks/useUpcoming';
import useTopRated from '../hooks/useTopRated';
const Browse = () => {
  useNowPlayingMovie();
  usePopular();
  useUpcoming();
  useTopRated();
  return (
    <div className='w-screen relative'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;