import React, { useEffect, useState , useContext} from 'react'
import MovieLayout from '../layout/movie.layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { TvContext } from "../context/Tv.context";
import Slider from 'react-slick'
import PosterSlider from '../components/PosterSlider/PosterSlider.component'
import TvHero from '../TvHero/Tv.Hero'
import Cast from '../components/Cast/Cast.Component'

const TvPage = () => {
  const {id}=useParams();

  const {tv,setTv}=useContext(TvContext);

  const [cast,setCast]=useState([]);
  const [similarShows,setSimilarShows]=useState([]);
  
  useEffect(()=>{
    const requestCast=async()=>{
      const getCast=await axios.get(`/tv/${id}/credits`);
      setCast(getCast.data.cast);
    }
    requestCast();
  },[id])

  useEffect(()=>{
    const requestSimilarShows=async()=>{
      const getSimilarShows=await axios.get(`/tv/${id}/recommendations`);
      setSimilarShows(getSimilarShows.data.results);
    }
    requestSimilarShows();
  },[id])

  useEffect(()=>{
   const requestShow=async()=>{
   const getShowData=await axios.get(`/tv/${id}`)
   setTv(getShowData.data)   
  }
   requestShow();
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
    <TvHero/>
    <div className='ml-16 mr-16 px-40 md:px-12 my-8'>
      <div className='flex flex-col items-start gap-3'>
        <h1 className='text-white font-bold text-2xl'>About the Show</h1>
        <p className='text-white'>
          {tv.overview}
        </p>
      </div>
      <div className='my-8'>
          <hr/>
      </div>

      {/* cast slider */}
      <div className="my-8">
          <h2 className="text-white font-bold text-2xl mb-4">
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
        title="Similar Shows"
        posters={similarShows} 
        isDark={true}
        isPlay={true}/>
      </div>
    </div>
    </>
  )
}

export default MovieLayout(TvPage)