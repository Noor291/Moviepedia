import React,{useState,useEffect} from 'react'
//components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.component'
import PosterSlider from '../components/PosterSlider/PosterSlider.component'
//layout
import DefaultLayout from '../layout/default.layout'
import axios from 'axios'

const HomePage = () => {
  const [recommendedMovies,setRecommendedMovies]=useState([])
  const [premierMovies,setPremierMovies]=useState([])
  const [onlineStreamEvents, setOnlineStreamEvents]=useState([])

  useEffect(()=>{
    const requestTopRatedMovies=async ()=>{
      const getTopRatedMovies=await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=2995c97da0d30ec3f8734d93e1f6ea57')
      setRecommendedMovies(getTopRatedMovies.data.results)
    }
    requestTopRatedMovies();
  },[])

  return (
    <>
    <HeroCarousel/>
    <div className='ml-16 mr-16 px-40 md:px-12 my-8'>
      <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>The Best Of Live Events</h1>
      <EntertainmentCardSlider/>  
    </div>

    <div className='ml-16 mr-16 px-40 md:px-12 my-8'>
      <PosterSlider 
        title="Recommended Movies"
        subtitle="List of recommended movies"
        poster={recommendedMovies}
        isDark={false}
        />
    </div>

    <div className='bg-premier-800 '>
      <div className='ml-16 mr-16 px-40 md:px-12 my-8 flex flex-col gap-3'>
        <div className='hidden md:flex'>
            <img 
              src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png' 
              alt='premiere' 
              className='w-full h-full'/>
        </div>
        <PosterSlider 
        title="Premieres"
        subtitle="Brand new releases every Friday"
        poster={premierMovies}
        isDark={true}
        />
      </div>
    </div>
    <div container className='ml-16 mr-16 px-40 md:px-12 my-8'>
      <PosterSlider 
        title="Online Streaming Events"
        subtitle=""
        poster={onlineStreamEvents}
        isDark={false}
        />
    </div>
    </>
  )
}

export default DefaultLayout(HomePage)