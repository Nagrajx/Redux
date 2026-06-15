import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../Redux/Features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos', 'gif']

    const dispatch = useDispatch()

    const activeTab = useSelector((state) => state.search.activeTab);


    return (
        <div className='  md:flex  gap-10 justify-center items-center p-10'>
            {
                tabs.map((elem, index) => {
                    return (
                        <button className={`${activeTab == elem ?'bg-green-700':''} bg-blue-400 px-5 py-3 rounded uppercase cursor-pointer  text-xl active:scale-90 active:bg-green-500`} key={index}
                            onClick={() => {
                                dispatch(setActiveTabs(elem))

                            }}> {elem}</button>

                    )

                })

            }
        </div>
    )
}

export default Tabs