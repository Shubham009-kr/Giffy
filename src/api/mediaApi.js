import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY


export async function fetchPhotos(query, page=1, per_page=20){
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        params:{query, page, per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`},
    })
    
    return response.data.results;
}

export async function fetchVideos(query, per_page=15){
    const response = await axios.get('https://api.pexels.com/videos/search',{
        params:{query, per_page},
        headers:{Authorization:PEXELS_KEY},
    })
    
    return response.data.videos;
}

export async function fetchGif(query, limit=20){
    const response = await axios.get('https://api.giphy.com/v1/gifs/search',{
        params:{q: query, api_key: GIPHY_KEY, limit },
    })
    
    return response.data.data;
}