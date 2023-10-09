import React,{useState,useEffect} from 'react'
//components
import PosterSlider from '../components/PosterSlider/PosterSlider.component'
//layout
import DefaultLayout from '../layout/default.layout'
import axios from 'axios'

const HomePage = () => {
  const [recommendedMovies,setRecommendedMovies]=useState([])
  const [premierMovies,setPremierMovies]=useState([])
  const [UpcomingMovies, setUpcomingMovies]=useState([])

  useEffect(()=>{
    const requestPopularMovies=async ()=>{
      const getPopularMovies=await axios.get('/movie/popular')
      setRecommendedMovies(getPopularMovies.data.results)
    }
    requestPopularMovies();
  },[])
  
  useEffect(()=>{
    const requestTopRatedMovies=async ()=>{
      const getTopRatedMovies=await axios.get('/movie/top_rated')
      setPremierMovies(getTopRatedMovies.data.results)
    }
    requestTopRatedMovies();
  },[])

  useEffect(()=>{
    const requestUpcomingMovies=async ()=>{
      const getUpcomingMovies=await axios.get('/movie/upcoming')
      setUpcomingMovies(getUpcomingMovies.data.results)
    }
    requestUpcomingMovies();
  },[])
  
  return (
  <>
    <div container className='ml-16 mr-16 px-40 md:px-12 my-8'>
      <PosterSlider 
        title="Upcoming Movies"
        subtitle=""
        posters={UpcomingMovies}
        isDark={false}
        />
    </div>
    <div className='bg-[#183D3D] '>
    <div className="ml-16 mr-16 px-40 md:px-12 my-8">
      <PosterSlider 
        title="Popular Movies"

        posters={recommendedMovies}
        isDark={true}
        />
    </div>
    </div>
      <div className='ml-16 mr-16 px-40 md:px-12 my-8 gap-3'>
        <PosterSlider 
        title="Top Rated Movies"
        posters={premierMovies}
        isDark={false}
        />
      </div>
    </>
  )
}

export default DefaultLayout(HomePage)