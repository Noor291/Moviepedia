import React from 'react'
import Navbar from '../components/navbars/Navbar.component'
import Footer from '../components/navbars/Footer'
const DefaultLayout = (Component) =>
({...props}) => {
  return (
    <div>
        <Navbar></Navbar>
        <Component {...props}/>
        <Footer></Footer>
    </div>
  )
}

export default DefaultLayout