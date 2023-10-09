import React from 'react'
import {useState,useEffect} from 'react'
import MovieLayout from '../layout/movie.layout'
import Grid from '../components/Grid/Movie.grid'
import Poster from '../components/Poster/Poster.Component'
import axios from 'axios'
const Movie = () => {
  const [Movies,setMovies]=useState([])
  useEffect(()=>{
      const requestMovies=async ()=>{
      const getMovies=await axios.get('movie/now_playing')
      setMovies(getMovies.data.results)
    }
    requestMovies();
  },[])
  return (
    <div><div container className='ml-16 mr-16 px-40 md:px-12 my-8 '>
    <Grid
      title="Movies"
      subtitle=""
      posters={Movies}
      isDark={true}
      />
  </div></div>
  )
}

export default MovieLayout(Movie)