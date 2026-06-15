import React, { useEffect } from 'react'

import { fetchPhotes, getVideos, getGif } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../Redux/Features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'


const ResultGrid = () => {
    const dispatch = useDispatch()
    const { query, activeTab, loading, results, error } = useSelector((store) => store.search)

    useEffect(() => {
        const getData = async () => {

            if (activeTab == 'photos') {
                let response = await fetchPhotes(query)
                console.log(response.results);
            }
            if(activeTab == 'videos'){
                let response = await getVideos(query)
                console.log(response.videos)
            }
            if(activeTab == 'gif'){
                let response = await getGif(query)
                console.log(response.data)
            }

        }
        getData()
    }, [query, activeTab]);


    return (
        <div className='h-screen w-full'>



        </div>
    )
}

export default ResultGrid