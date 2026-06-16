import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../Components/CollectionCard'
import { clearCollection, removeToast } from '../Redux/Features/collectionSlice'
import { toast } from 'react-toastify'

const CollectionPage = () => {
  const collection = useSelector(state => state.collection.items)

  const dispatch = useDispatch();
  const clearEverything=()=>{
      dispatch(clearCollection())
      dispatch(removeToast())
  }

  return (
    <div>
      <h1 className='bg-cyan-600 mb-6 w-full text-white text-center py-6 px-4 text-2xl sm:text-3xl'>
        Your Collections
        
      </h1>
       <button 
       onClick={()=>{
        clearEverything();
       }}
       className='text-white active:scale-95 rounded border white p-3 mb-3 bg-red-700 capitalize ml-10 text-xl'>Clear-Everything..</button>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4 sm:px-6 md:px-10'>
        {
          collection.map((item, index) => (
            <CollectionCard key={index} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPage