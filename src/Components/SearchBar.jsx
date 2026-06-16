import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../Redux/Features/searchSlice';

const SearchBar = () => {

    const [textsearch, setTextSearch] = useState('');
   
    const dispatch =  useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
         dispatch(setQuery(textsearch))
        setTextSearch("")

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex space-y-3   p-10 gap-10'>
                <label htmlFor='search' className='text-4xl  mt-1 text-white'>Enter-:</label>
                <input
                    required
                    className='w-full  border-1 border-white px-4 py-2 text-white  text-xl rounded'
                    type="text" id='search' placeholder='Search Anything...' value={textsearch} onChange={(e)=>{
                        setTextSearch(e.target.value)
                    }} />
                <button className='text-2xl rounded mt-1 mb-2 bg-blue-500 p-2 active:scale-90 cursor-pointer'  >Search</button>
            </form>
        </div>
    )
}

export default SearchBar