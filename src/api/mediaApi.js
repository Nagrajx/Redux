import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const GIF_KEY = import.meta.env.VITE_GIF_KEY

//   For geting Photo API
export async function fetchPhotes(query, page = 1, per_page = 20) {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, page, per_page },
        headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
    
    })
    return res.data;

}


// for gettting Video API


export async function getVideos(query, page = 1, per_page = 20) {
    const res = await axios.get('https://api.pexels.com/v1/videos/search', {
        params: { query, page, per_page },
        headers: { Authorization: ` ${PEXELS_KEY}` }
    })

    return res.data;
}

// for getting GIF API

export async function getGif(query) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
       params:{
         api_key: GIF_KEY,
         q:query,
        limit: 50
       }
    })

    console.log(res.data);
    

    return res.data
}