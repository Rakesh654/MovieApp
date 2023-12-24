import React from 'react'
import useMovie from '../hooks/useMovie';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieid}) => {
    
  useMovie(movieid); 
  const movieVideo = useSelector(store => store.movies?.moviesVideos);
  if(!movieVideo) return;
  const trailers = movieVideo.filter(trailer => trailer.type === "Trailer");  
  const trailer = trailers.length > 0 ? trailers[0] : movieVideo[0];
  const {key} = trailer;
  return (
    <div className=''>
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + key +"?&autoplay=1&mute=1"} title="The Hunger Games: The Ballad of Songbirds &amp; Snakes (2023) Official Trailer 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground;