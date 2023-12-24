import React from 'react'
import { BACKGROUND_URL } from '../utils/constants'
import { lang } from '../utils/languageConstants'
import { useSelector } from 'react-redux'

function GptSearch() {
    const langkey = useSelector(store => store.lang.lang).toLowerCase();
    const key = langkey === "english" ? "en" : langkey;
  return (
    <div>
    <div>
    <img className='absolute -z-10' alt='loading' src={BACKGROUND_URL}></img>
    </div>
    <div className='pt-[10%] flex justify-center'>
       
        <div className='p-5 bg-black rounded-lg'>
        <form className='bg-black w-12/12 '>
            <input type='text' className='border border-black p-3 w-96' placeholder={lang[key].SEARCH_PLACEHOLDER}></input>
            <button className='bg-red-700 text-white mx-10 p-4 rounded-md'>{lang[key].SEARCH}</button>
        </form>
        </div>
    </div>
    </div>
  )
}

export default GptSearch