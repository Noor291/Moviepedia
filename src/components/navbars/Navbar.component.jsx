import React from 'react'
import {BiCaretDown,BiMenu, BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom";
import logo from "../../assets/movie.png";
import { useNavigate } from 'react-router-dom';

function NavSm(){
  return <>
  <div className='text-white flex items-center justify-between'>
    <div>
      <h3 className='text-xl font-bold'>It All Starts Here!</h3>
      <span className='text-gray-400 text-xs flex items-center cursor-pointer hover:text-white'>
      Delhi-NCR <BiCaretDown/>
      </span>
    </div>
    <div className='w-8 h-8'>
      <BiSearch className='w-full h-full'/>
    </div>
  </div>
  </>
}

function NavMd(){
  return <>
  <a href="/">
  <div className='h-12 w-13 mr-2'>
    <img src={logo} alt="logo" className='w-full h-full' />
  </div>
</a>
  <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
    <BiSearch/>
    <input type='search' className='w-full bg-transparent border-none focus:outline-none' placeholder="Search for movies, events, plays, sports and activities"/>
  </div>
  </>
}

function NavLg(){
  const navigate = useNavigate()
  const navigateToMovies = () => {
    navigate('/plays');
  };
  const navigateToTVShows = () => {
    navigate('/');
  };
  return <>
  <div className='container flex mx-auto px-4 items-center justify-between'>
    <div className='flex items-center w-3/4 gap-3'>
    <a href="/">
      <div className='h-12 w-12 mr-2'>
        <img src={logo} alt="logo"className='w-full h-full'/>
      </div>
    </a>
      <div className='w-full flex items-center gap-3 bg-white pl-2 px-3 py-1 rounded-md'>
        <BiSearch/>
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

//main component
const Navbar = () => {
  return (
    <nav className="bg-[#183D3D] px-4 py-3">
    <div className="md:hidden">
        <NavSm />
      </div>
      {/* Medium/Tab Screen NavBar */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>
      {/* Large Screen NavBar */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;