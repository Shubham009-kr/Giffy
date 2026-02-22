import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos, fetchGif } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const ResultGrid = () => {
    const dispatch = useDispatch();
    const {query, activeTab, results, loading, error} = useSelector((store)=>store.search)
  
    useEffect(()=>{
      const getData = async ()=>{
        try {
          dispatch(setLoading())
          let data = [];
          if(activeTab == 'photos'){
            let response = await fetchPhotos(query);
            data = response.map((item)=>({
              id:item.id,
              type:'photo',
              title:item.alt_description,
              thumbnail:item.urls.small,
              src:item.urls.full,
            }))  
          }
          if(activeTab == 'videos'){
            let response = await fetchVideos(query);
            data = response.map((item)=>({
              id:item.id,
              type:'video',
              title:item.user.name || 'video',
              thumbnail:item.image,
              src:item.video_files[0].link,
            }))
          }
          if(activeTab == 'gif'){
            let response = await fetchGif(query);
            data = response.map((item)=>({
              id:item.id,
              type:'gif',
              title:item.title,
              thumbnail:item.images.original.url,
              src:item.url,
            }))
          }
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err));
        }
      }

      getData();
    },[query, activeTab]);

  return (
    <div>
      <button>Get Data</button>

    </div>
  )
}

export default ResultGrid