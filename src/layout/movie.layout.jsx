import React from 'react'
import MovieNavbar from '../components/navbars/movieNavbar.component'

const MovieLayout = (Component) =>
({...props}) => {
  return (
    <div className=' bg-[#040D12]'>
        <MovieNavbar></MovieNavbar>
        <Component {...props}/>
    </div>
  )
}

export default MovieLayout