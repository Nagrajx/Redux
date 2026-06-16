import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../Redux/Features/searchSlice'

const SearchBar = () => {
    const [textsearch, setTextSearch] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setQuery(textsearch))
        setTextSearch('')
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col md:flex-row items-center gap-4 p-4 md:p-10'
            >
                <label
                    htmlFor='search'
                    className='text-2xl md:text-4xl text-white'
                >
                    Enter:
                </label>

                <input
                    required
                    id='search'
                    type='text'
                    placeholder='Search Anything...'
                    value={textsearch}
                    onChange={(e) => setTextSearch(e.target.value)}
                    className='w-full border border-white px-4 py-2 text-white text-lg md:text-xl rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                />

                <button
                    type='submit'
                    className='w-full md:w-auto text-lg md:text-2xl rounded bg-blue-500 px-6 py-2 active:scale-90 cursor-pointer transition-transform'
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar