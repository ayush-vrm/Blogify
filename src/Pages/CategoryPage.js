import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1).replaceAll('-', ' ');
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-x-1 mt-[75px]">
            <Header />
            <div className=''>
            <div className="w-full h-full flex flex-col items-center justify-center gap-x-1"  >
                <div>
                    <button className='border-2 border-gray-300 py-1 px-4 rounded-md justify-left' onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2 className="font-bold text-2xl uppercase text-center justify-center">
                    Blogs On <span>{category}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
            </div>

        </div>
    )
}

export default CategoryPage