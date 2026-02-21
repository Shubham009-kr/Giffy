import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos, fetchGif } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const ResultGrid = () => {
    const dispatch = useDispatch();
    const {query, activeTabs, results, loading, error} = useSelector((store)=>store.search)
    useEffect()
  return (
    <div>

    </div>
  )
}

export default ResultGrid