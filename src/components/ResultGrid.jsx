import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos, fetchGif } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const ResultGrid = () => {
    const dispatch = useDispatch();
    const {query, activeTab, results, loading, error} = useSelector((store)=>store.search)
    const getData = async ()=>{
      let data;
      let response;
      if(activeTab == 'photos'){
        response = await fetchPhotos(query);
        data = response.map((item)=>({
          id:item.id,
          type:'photo',
          title:item.alt_description,
          thumbnail:item.urls.small,
          src:item.urls.full,
        }))  
      }
      if(activeTab == 'videos'){
        response = await fetchVideos(query);
        
      }
      if(activeTab == 'GIF'){
        response = await fetchGif(query);

      }
      console.log(data);

    }

    useEffect(()=>{
      getData();
    },[query, activeTab]);

  return (
    <div>
      <button>Get Data</button>

    </div>
  )
}

export default ResultGrid