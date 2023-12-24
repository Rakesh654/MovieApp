import React from 'react'

const VideoTitle = ({title, overview}) => (
    <div className='w-screen aspect-video pl-24 pt-64 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-4xl'>{title}</h1>
        <p className='w-1/4 pt-4'>{overview}</p>
        <div className='pt-4'>
            <button className='bg-white text-black p-3 rounded-md'>► Play Now</button>
            <button className='bg-gray-500 ml-2 text-white rounded-md bg-opacity-50 p-3'>! More Info</button>
        </div>
    </div>
)

export default VideoTitle;