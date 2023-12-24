import React from 'react'
import { IMAGE_BASE_URL } from '../utils/constants'

function MovieCard({posterPath}) {
  return (
    <div className='w-56 p-2 mb-60'>
        <img alt='Movie name' src={IMAGE_BASE_URL+posterPath}></img>
    </div>
  )
}

export default MovieCard