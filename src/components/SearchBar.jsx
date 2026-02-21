import React, { useState } from 'react'

const SearchBar = () => {

    const [searchField, setSearchField] = useState('')
  return (
    <div className='flex items-center justify-center pt-12'>
        <form className='flex justify-center items-center py-4 px-2 border border-purple-900/50  
        shadow-pink-600/50 shadow-sm w-fit rounded-full md:gap-4 gap-2'>
            <input type="text" placeholder='Looking for something?' 
            className='glass bg-white/10 border border-white/20 text-white 
            placeholder-white px-4 py-2 rounded-full md:w-[30vw] md:focus:w-[50vw] w-40 focus:w-60 transition-width 
            duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/30'/>
            <button className='glass bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/50
            hover:border-purple-600 px-4 py-2 rounded-full transition-colors
            shadow-sm hover:shadow-2xl'>
            Search</button>
        </form>
    </div>
  )
}

export default SearchBar