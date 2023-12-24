import React from 'react'
import Header from './Header';
import useNowPlayingMovie from '../hooks/useNowPlayingHook';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopular from '../hooks/usePopular';
import useUpcoming from '../hooks/useUpcoming';
import useTopRated from '../hooks/useTopRated';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const toggleView = useSelector((store) => store.gpt.toggleview);
  useNowPlayingMovie();
  usePopular();
  useUpcoming();
  useTopRated();
  
  return (
    <div className='w-screen relative'>
      <Header/>
      {toggleView ? <GptSearch/> : <> 
      <MainContainer/>
      <SecondaryContainer/>
      </> }
     
    </div>
  )
}

export default Browse;