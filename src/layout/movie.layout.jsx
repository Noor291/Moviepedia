import React from 'react'
import MovieNavbar from '../components/navbars/movieNavbar.component'

const MovieLayout = (Component) =>
({...props}) => {
  return (
    <div>
        <MovieNavbar></MovieNavbar>
        <Component {...props}/>
        <div>Footer</div>
    </div>
  )
}

export default MovieLayout