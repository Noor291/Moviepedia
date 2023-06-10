//rafce
import React, { useEffect, useState , useContext} from 'react'
import MovieLayout from '../layout/movie.layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { MovieContext } from '../context/Movie.context'
import Slider from 'react-slick'
import {FaCcVisa,FaCcApplePay} from "react-icons/fa"
import PosterSlider from '../components/PosterSlider/PosterSlider.component'

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
  const settingCast={};
  const settings={};
  return (
    <>
    {/* <MovieHero/> */}
    <div className='my-12 container px-4 lg-ml-20 lg:w-2/1'>
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
        <div className='flex flex-col gap-3 lg:flex-row lg:w-3/4'>
          <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
            <div className='w-20 h-20'>
              <FaCcVisa className='w-full h-full'/> 
            </div>
            <div className='flex flex-col items-start'>
              <h3 className='text-gray-700 text-xl font-bold'>
                Visa Stream Offer
              </h3>
              <p className='text-gray-600'>
                Get 50% off up to INR 150 on all RuPay card on BookMyShow stream
              </p>

            </div>
            </div>
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
            <div className='w-20 h-20'>
              <FaCcApplePay className='w-full h-full'/> 
            </div>
            <div className='flex flex-col items-start'>
              <h3 className='text-gray-700 text-xl font-bold'>
                Film Pass
              </h3>
              <p className='text-gray-600'>
                Get 50% off up to INR 150 on all RuPay card on BookMyShow stream
              </p>

            </div>
          </div>
        </div>
      </div>

      <div className='my-8'>
          <hr/>
      </div>

      {/* cast slider */}

      <div className='my-8'>
          <hr/>
      </div>

      {/* recommended movies slider */}
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



    </div>
    </>
  )
}

export default MovieLayout(MoviePage)