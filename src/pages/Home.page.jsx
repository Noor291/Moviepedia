import React,{useState} from 'react'
//components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.component'
import PosterSlider from '../components/PosterSlider/PosterSlider.component'
//layout
import DefaultLayout from '../layout/default.layout'

const HomePage = () => {
  const [recommendedMovies,setRecommendedMovies]=useState([])
  const [premierMovies,setPremierMovies]=useState([])
  const [onlineStreamEvents, setOnlineStreamEvents]=useState([])

  return (
    <>
    <HeroCarousel/>
    <div className='container mx-auto px-4 md:px-12 my-8'>
      <h1 className='text-2x1 font-bold text-gray-800 sm:ml-3 ml-0 my-3'>The Best of Entertainment</h1>
      <EntertainmentCardSlider/>  
    </div>

    <div className='container mx-auto px-4 md:px-12 my-8'>
      <PosterSlider 
        title="Recommended Movies"
        subject="List of recommended movies"
        poster={recommendedMovies}
        isDark={false}
        />
    </div>

    <div className='bg-premier-800 '>
      <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
        <div className='hidden md:flex'>
            <img 
              src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png' 
              alt='premiere' 
              className='w-full h-full'/>
        </div>
        <PosterSlider 
        title="Premieres"
        subject="Brand new releases every Friday"
        poster={premierMovies}
        isDark={true}
        />
      </div>
    </div>
    <div container className='mx-auto px-4 md:px-12 my-8'>
      <PosterSlider 
        title="Online Streaming Events"
        subject=""
        poster={onlineStreamEvents}
        isDark={false}
        />
    </div>
    </>
  )
}

export default DefaultLayout(HomePage)