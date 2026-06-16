import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../Redux/Features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos', 'gif']

    const dispatch = useDispatch()

    const activeTab = useSelector((state) => state.search.activeTab)

    return (
        <div className='flex flex-wrap justify-center gap-4 md:gap-10 p-4 md:p-10'>
            {tabs.map((elem, index) => (
                <button
                    key={index}
                    className={`
                        ${activeTab === elem ? 'bg-green-700' : 'bg-blue-400'}
                        px-5 py-3 rounded uppercase cursor-pointer
                        text-base sm:text-lg md:text-xl
                        active:scale-90 active:bg-green-500
                        transition-all duration-200
                    `}
                    onClick={() => dispatch(setActiveTabs(elem))}
                >
                    {elem}
                </button>
            ))}
        </div>
    )
}

export default Tabs