import React from 'react'
import Slider from 'react-slick'
import Poster from '../Poster/Poster.Component'
import PosterTv from '../Poster/Poster.Tv'
const PosterSlider = (props) => {
  const{title,posters,subtitle,isDark,isPlay}=props;
  const settings={
    infinite:true,
    speed:500,
    slidesToShow:5,
    slideToScroll:6,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
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
  }
  return (
    <>
    <div className="flex flex-col items-start py-4 sm:ml-3 ml-0">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>
      {!isPlay && (
        <Slider {...settings}>
          {posters.map((each, index) => (
            <Poster {...each} isDark={isDark} key={index} />
          ))}
        </Slider>
      )}
          {isPlay &&(
        <Slider {...settings}>
          {posters.map((each, index) => (
            <PosterTv {...each} isDark={isDark} key={index} />
          ))}
      </Slider>
        )}
    </>
  )
}

export default PosterSlider