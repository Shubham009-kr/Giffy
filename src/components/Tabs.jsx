import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice';

const Tabs = () => {
    const tabs = ['photos', 'gif', 'videos']
    const dispatch = useDispatch();
    const activeTab = useSelector((state)=>state.search.activeTab);
  return (
    <div className='w-full flex items-center justify-center mt-4 gap-1'>
        {
            tabs.map((elem, idx)=>{
                return( <button key={idx} onClick={()=>{ dispatch(setActiveTabs(elem)) }}
                className={activeTab==elem?`bg-gradient-to-b transition active:scale-95 from-[#1d1d1d] to-[#303030] w-1/3 h-16 shadow-pink-600/60
                shadow-xs rounded-sm` :`bg-gradient-to-b transition active:scale-95 from-[#1d1d1d] to-[#303030] w-1/3 h-16 shadow-purple-600/60
                shadow-xs rounded-sm`}
                >{elem}</button>
            )})
        }
    </div>
  )
}

export default Tabs