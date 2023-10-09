import React from 'react'
import MovieLayout from '../layout/movie.layout'
import Poster from '../components/Poster/Poster.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.component'
import {useState,useEffect} from 'react'
import axios from 'axios'
import TGrid from '../components/Grid/Tv.grid'

const Tv = () => {
  const [shows,setShows]=useState([])
  useEffect(()=>{
      const requestShows=async ()=>{
      const getShows=await axios.get('tv/top_rated')
      setShows(getShows.data.results)
    }
    requestShows();
  },[])
  return (
    <div><div container className='ml-16 mr-16 px-40 md:px-12 my-8 '>
    <TGrid
      title="TV Shows"
      subtitle=""
      posters={shows}
      isDark={true}
      />
  </div></div>
  )
}

export default MovieLayout(Tv)