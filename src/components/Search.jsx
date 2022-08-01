import React, { useEffect, useState } from 'react'
import { Links } from './Links'
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../context/ResultContextProvider';

export const Search = () => {
    const [text,setText] = useState('');
    const {setSearchTerm} = useResultContext();
    const [debouncedValue] = useDebounce(text,600);

    useEffect(()=>{
        if(debouncedValue) setSearchTerm(debouncedValue);
    },[debouncedValue])

  return (
    <div className='relative sm:ml-48 md:ml-73 sm:-mt-10 mt-3'>
        <input value={text} type='text' className='sm:w-96 w-80 h-10 
        dark:bg-gray-200 border rounded-full shadow-sm outline-none 
        p-6 text-black hover:shadow-lg' 
        placeholder='Enter Search Term'
        onChange={(e)=>setText(e.target.value)} />
        {
            text && (
                <button type='button' className='absolute top-1.5 
                right-4 text-2xl text-gray-500' onClick={()=>setText('')}>
                    x
                </button>
            )
        }
        <Links />
    </div>
  )
}
