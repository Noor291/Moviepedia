//rafce
import React, { useEffect, useState , useContext} from 'react'
import MovieLayout from '../layout/movie.layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { MovieContext } from '../context/Movie.context'
import Slider from 'react-slick'
import {FaCcVisa,FaCcApplePay} from "react-icons/fa"
import PosterSlider from '../components/PosterSlider/PosterSlider.component'
import MovieHero from '../components/MovieHero/MovieHero.component'
import Cast from '../components/Cast/Cast.Component'

const MoviePage = () => {
  const {id}=useParams();

  const {movie,setMovie}=useContext(MovieContext);

  const [cast,setCast]=useState([]);
  const [similarMovies,setSimilarMovies]=useState([]);
  const [recommended,setRecommended]=useState([]);
  


  useEffect(()=>{
    const requestCast=async()=>{
      const getCast=await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    }
    requestCast();
  },[id])

  useEffect(()=>{
    const requestSimilarMovies=async()=>{
      const getSimilarMovies=await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    }
    requestSimilarMovies();
  },[id])

  useEffect(()=>{
    const requestRecommended=async()=>{
      const getRecommended=await axios.get(`/movie/${id}/recommendations`);
      setRecommended(getRecommended.data.results);
    }
    requestRecommended();
  },[id])

  useEffect(()=>{
   const requestMovie=async()=>{
   const getMovieData=await axios.get(`/movie/${id}`)
   setMovie(getMovieData.data)   
  }
   requestMovie();
  },[id])

  const settingCast={
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings={
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
    ],
  };

  return (
    <>
    <MovieHero/>
    <div className='ml-16 mr-16 px-40 md:px-12 my-8'>
      <div className='flex flex-col items-start gap-3'>
        <h1 className='tetx-gray-800 font-bold text-2xl'>About the movie</h1>
        <p>
          {movie.overview}
        </p>
      </div>
      <div className='my-8'>
          <hr/>
      </div>

      <div className='my-8'>
        <h2 className='text-gray-800 font-bold text-2xl mb-3'>
          Applicable Offers
        </h2>
        <div className='flex flex-col gap-3 lg:flex-row '>
          <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
            <div className='w-8 h-8'>
              <FaCcVisa className='w-full h-full'/> 
            </div>
            <div className='flex flex-col items-start'>
              <h3 className='text-gray-700 text-xl font-bold'>
                Visa Stream Offer
              </h3>
              <p className='text-gray-600'>
                Get 50% off up to INR 150 on all RuPay cards* on BookMyShow stream
              </p>

            </div>
            </div>
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
            <div className='w-8 h-8'>
              <FaCcApplePay className='w-full h-full'/> 
            </div>
            <div className='flex flex-col items-start'>
              <h3 className='text-gray-700 text-xl font-bold'>
                Film Pass
              </h3>
              <p className='text-gray-600'>
                Get 50% off up to INR 150 on all RuPay cards* on BookMyShow stream
              </p>

            </div>
          </div>
        </div>
      </div>

      <div className='my-8'>
          <hr/>
      </div>

      {/* cast slider */}
      <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">
            Cast and Crew
          </h2>
          <Slider {...settingCast}>
            {cast.map((castData) => (
              <Cast
                image={castData.profile_path}
                castName={castData.original_name}
                role={castData.character}
              />
            ))}
          </Slider>
        </div>
      

      <div className='my-8'>
          <hr/>
      </div>
      
      <div className='my-8'>
        <PosterSlider 
        config={settings} 
        title="Recommended Movies"
        posters={recommended} 
        isDark={false}/>
      </div>

      <div className='my-8'>
          <hr/>
      </div>

      <div className='my-8'>
        <PosterSlider 
        config={settings} 
        title="Similar Movies"
        posters={similarMovies} 
        isDark={false}/>
      </div>

    </div>
    </>
  )
}

export default MovieLayout(MoviePage)