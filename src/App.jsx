import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import { fetchPhotes, getGif, getVideos } from './api/mediaApi'
import SearchBar from './Components/SearchBar'
import Tabs from './Components/Tabs'
import ResultGrid from './Components/ResultGrid'
import Home from './Pages/HomePage'
import Collection from './Pages/CollectionPage'
import { ToastContainer } from 'react-toastify'

const App = () => {



  return (
    <div className=   ' min-h-[100vh] bg-black'>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection />}></Route>
      </Routes>
      
      <ToastContainer />

    </div>
  )
}

export default App