import React from 'react'
import Slider from 'react-slick'
import Poster from '../Poster/Poster.Component'
import Tv from '../Poster/Poster.Tv'

const TGrid = (props) => {
  const{title,posters,subtitle,isDark,config,isPlay}=props;
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
      </div>
      <div className='grid grid-cols-4 gap-6 py-4 '>
      {posters.map((each, index) => (
            <Tv {...each} isDark={isDark} key={index} />
          ))}
      </div>
      </>
  )
}

export default TGrid