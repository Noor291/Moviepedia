import React from 'react'
import MovieNavbar from '../components/navbars/movieNavbar.component'
import Footer from '../components/navbars/Footer'
const MovieLayout = (Component) =>
({...props}) => {
  return (
    <div className=' bg-[#040D12]'>
        <MovieNavbar></MovieNavbar>
        <Component {...props}/>
        <Footer></Footer>
    </div>
  )
}

export default MovieLayout