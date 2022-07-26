import React, { useContext, useEffect } from 'react'
import {useResultContext} from '../context/ResultContextProvider';
import { useLocation } from 'react-router-dom';
import { Loading } from './Loading';

export const Results = () => {
    const { results, loading, searchTerm, getResults} = useResultContext();
    const location = useLocation();

    useEffect(()=>{
       getResults('/search/q=Franklin Anyaso')
    },[])

    if (loading) return <Loading />;
  return (
    <div>Results</div>
  )
}
