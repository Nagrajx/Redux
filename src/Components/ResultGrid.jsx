import React, { useEffect } from 'react'

import { fetchPhotes, getVideos, getGif } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../Redux/Features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'


const ResultGrid = () => {

    const dispatch = useDispatch()
    const { query, activeTab, loading, results, error } = useSelector((state) => state.search)


    useEffect(() => {
        const getData = async () => {
            if (!query.trim()) {
                return;
            }
            try {
                dispatch(setLoading(true))
                let data = []
                if (activeTab == 'photos') {
                    try {
                        setLoading(true)
                        let response = await fetchPhotes(query)

                        data = response.results.map((item) => ({
                            id: item.id,
                            type: 'photo',
                            title: item.alt_description,
                            thumbnail: item.urls.thumb,
                            src: item.urls.full
                        }))

                    }
                    catch (error) {
                        console.log(error)
                    }
                    finally {
                        setLoading(false)
                    }
                }
                if (activeTab == 'videos') {
                    try {
                        let response = await getVideos(query)
                        data = response.videos.map((item) => ({
                            id: item.id,
                            type: 'video',
                            title: item.user.name,
                            thumbnail: item.image,
                            src: item.video_files[0].link

                        }))
                    }
                    catch (error) {
                        console.log(error)
                    }
                    finally {
                        setLoading(false)
                    }

                }
                if (activeTab == 'gif') {
                    try {
                        setLoading(true)
                        let response = await getGif(query)
                        data = response.data.map((item) => ({
                            id: item.id,
                            type: 'gif',
                            title: item.title,
                            src: item.images.original.url,
                            url:item.embed_url
                        }))

                    } catch (err) {
                    console.log(err.message)
                    }
                    finally {
                          setLoading(false)
                    }

                }
                dispatch(setResults(data))
            }
            catch (error) {
                dispatch(setError(error.message))
            }
        }
        getData()
    }, [query, activeTab]);


    return (
        <div className='flex w-full justify-center flex-wrap gap-5  px-11'>
           
             {
                results.map((item, index) => {
                    return <div key={index}>
                        <ResultCard item={item} />
                    </div>
                })
            }
          
        </div>
    )
}

export default ResultGrid