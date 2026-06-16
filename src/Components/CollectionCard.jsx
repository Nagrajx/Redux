import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../Redux/Features/collectionSlice'

const CollectionCard = ({ item }) => {
    const dispatch = useDispatch()

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }

    return (
        <div className='w-full max-w-sm h-80 sm:h-96 relative bg-white rounded-xl overflow-hidden shadow-lg'>

            

            {item.type === 'photo' && (
                <img
                    loading="lazy"
                    className='h-full w-full object-cover'
                    src={item.src}
                    alt={item.title || 'Photo'}
                />
            )}

            {item.type === 'video' && (
                <video
                    className='h-full w-full object-cover'
                    autoPlay
                    loop
                    muted
                    src={item.src}
                />
            )}

            {item.type === 'gif' && (
                <img
                    loading="lazy"
                    className='h-full w-full object-cover'
                    src={item.src}
                    alt={item.title || 'GIF'}
                />
            )}

            <div className='absolute bottom-0 left-0 w-full flex justify-between items-center gap-3 p-4 bg-black/50 text-white'>

                <h1 className='capitalize text-sm sm:text-base font-medium line-clamp-2 flex-1'>
                    {item.title}
                </h1>

                <button
                    onClick={() => removeFromCollection(item)}
                    className='bg-red-500 cursor-pointer text-white rounded px-3 py-2 text-sm sm:text-base font-medium active:scale-90 transition-transform'
                >
                    Remove
                </button>

            </div>

        </div>
    )
}

export default CollectionCard