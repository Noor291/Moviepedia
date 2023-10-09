import React,{useContext} from 'react'
import {BiCaretDown,BiMenu, BiSearch, BiShareAlt } from 'react-icons/bi'
import { MovieContext } from '../../context/Movie.context'
import logo from "../../assets/movie.png";
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate()
    const navigateToMovies = () => {navigate('/movies');};
    const navigateToTVShows = () => {navigate('/tvshows');};
  return <>
  <div className='container flex mx-auto px-4 items-center justify-between'>
    <div className='flex items-center w-3/4 gap-3'>
    <a href="/">
      <div className='h-12 w-12 mr-2'>
        <img src={logo} alt="logo"className='w-full h-full'/>
      </div>
    </a>
      <div className='w-full flex items-center gap-3 bg-white pl-2 px-3 py-1 rounded-md'>
        <input type='search' className='w-full bg-transparent border-none focus:outline-none' placeholder='Search for Movies or TV Shows'/>
      </div>
    </div>
    <div className="flex items-center gap-3">       
      <button onClick={navigateToMovies} className="bg-[#93B1A6] text-white px-4 py-1 text-sm text-center justify-center rounded">
        Movies
      </button>
      <button onClick={navigateToTVShows} className="bg-[#93B1A6] text-white px-2 py-1 text-sm text-center justify-center rounded">
        TV Shows
      </button>
      <div className="w-8 h-8 text-white">
        <BiMenu className="w-full h-full" />
      </div>
    </div>
  </div>
  </>
}

const MovieNavbar = () => {
  return (<>
    <nav className='border-b-2 lg:border-b-0 bg-[#183D3D] px-4 py-3'>
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