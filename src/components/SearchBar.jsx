import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useMediaQuery } from "react-responsive";
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {

    const isMobile = useMediaQuery({
        query:"(max-width: 768px)",
    });

    const [searchField, setSearchField] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(setQuery(searchField));
        setSearchField('');
    }
  return (
    <div className='flex items-center justify-center pt-12'>
        <form onSubmit={(e)=>{submitHandler(e)}} className='flex justify-center items-center py-2 px-2 border border-purple-900/50  
        shadow-pink-600/50 shadow-sm w-fit rounded-full md:gap-4 gap-2'>
            <input value={searchField} onChange={(e)=>{setSearchField(e.target.value)}}
            required type="text" placeholder={isMobile?`Looking?`:`Looking for something?`} 
            className='glass bg-white/10 border border-white/20 text-white 
            placeholder-white px-4 py-2 rounded-full md:w-[30vw] md:focus:w-[50vw] w-40 focus:w-60 transition-width 
            duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/30'/>
            <button className='cursor-pointer glass bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/50
            hover:border-purple-600 px-4 py-2 rounded-full transition-colors
            shadow-sm hover:shadow-2xl active:scale-95'>
            Search</button>
        </form>
    </div>
  )
}

export default SearchBar