import React from 'react'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'

const App = () => {

  return (
    <div className='w-full h-screen bg-[#1d1d1d] text-[#f7ebff]'>
      <SearchBar />
      <Tabs />
    </div>
  )
}

export default App