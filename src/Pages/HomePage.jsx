import React from 'react'
import SearchBar from '../Components/SearchBar'
import Tabs from '../Components/Tabs'
import ResultGrid from '../Components/ResultGrid'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 py-6 px-4 md:px-10 bg-cyan-800'>

                <h2 className='text-xl md:text-2xl italic text-white'>
                    Media Search
                </h2>

                <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 text-lg md:text-2xl italic items-center'>
                    <Link
                        to="/"
                        className='bg-cyan-400 px-4 py-2 rounded cursor-pointer active:scale-90 transition-transform'
                    >
                        Search
                    </Link>

                    <Link
                        to="/collection"
                        className='bg-cyan-400 px-4 py-2 rounded cursor-pointer active:scale-90 transition-transform'
                    >
                        Collection
                    </Link>
                </div>

            </div>

            <SearchBar />
            <Tabs />
            <ResultGrid />
        </div>
    )
}

export default HomePage