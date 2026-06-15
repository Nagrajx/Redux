import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import { fetchPhotes, getGif, getVideos } from './api/mediaApi'
import SearchBar from './Components/SearchBar'
import Tabs from './Components/Tabs'
import ResultGrid from './Components/ResultGrid'


const App = () => {

 

  return (
         <div className='h-screen  text-white w-full bg-gray-950'>
            <SearchBar/>
            <Tabs />
            <ResultGrid />
  </div>
  )
}

export default App