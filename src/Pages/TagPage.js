import React from 'react'
import Header from '../components/Header'
import {useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

function TagPage() {

  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1).replaceAll('-', ' ');

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1 mt-[75px]">
    <Header />
    <div className=''>
        <div>
            <button className='border-2 border-gray-300 py-1 px-4 rounded-md mx-20' onClick={() => navigation(-1)}>Back</button>
        </div>
        <h2 className="font-bold text-2xl text-center justify-center">
            Blogs : <span> {tag}</span>
        </h2>
    </div>
    <Blogs />
    <Pagination />
</div>
  )
}

export default TagPage