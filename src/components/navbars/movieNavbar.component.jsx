import React,{useContext} from 'react'
import {BiCaretDown,BiMenu, BiSearch, BiShareAlt } from 'react-icons/bi'
import { MovieContext } from '../../context/Movie.context'

const NavSm=()=>{
  const {movie}=useContext(MovieContext);
  return ( <>
    <div className="text-gray-700 ml-16 mr-16 px-8 flex items-center justify-between">
      <div>
        <h3 className="text-xl font-bold">{movie.original_title}</h3>
      </div>
      <div className="w-8 h-8">
        <BiShareAlt className="w-full h-full" />
      </div>
    </div>
  </>
  )
}

const NavLg=()=>{
  return(
    <>
     <div className='container flex mx-auto px-4 items-center justify-between'>
       <div className='flex items-center w-1/2 gap-3'>
        <div className='w-10 h-10'>
          <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className='w-full h-full'/>
        </div>
        <div className='w-full flex items-center gap-3 bg-white pl-2 px-3 py-1 rounded-md'>
        <BiSearch/>
        <input type='search' className='w-full bg-transparent border-none focus:outline-none' placeholder='Search from movies, events, plays, sports and activities'/>
        </div>
       </div>
       <div className="flex items-center gap-3">
      <span className="text-gray-200 text-base flex items-center justify-center cursor-pointer hover:text-white">
      Delhi-NCR 
        <span className='pl-1'><BiCaretDown /></span>
      </span>
      <button className="bg-red-600 text-white px-2 py-1 text-sm text-center justify-center rounded">
        Sign In
      </button>
      <div className="w-8 h-8 text-white">
        <BiMenu className="w-full h-full" />
      </div>
      </div>
      </div>
    </>
  )
}

const MovieNavbar = () => {
  return (<>
    <nav className='bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4'>
      <div className='lg:hidden'>
        <NavSm/>
      </div>
      <div className='hidden w-full lg:flex'>
        <NavLg/>
      </div>
    </nav>
    </>
  )
}

export default MovieNavbar