import React from 'react'
import Navbar from '../components/navbars/Navbar.component'

const DefaultLayout = (Component) =>
({...props}) => {
  return (
    <div>
        <Navbar></Navbar>
        <Component {...props}/>
        <div>Footer</div>
    </div>
  )
}

export default DefaultLayout