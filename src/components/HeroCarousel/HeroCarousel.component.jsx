import React,{useState} from 'react'
import HeroSlider from 'react-slick';
import { NextArrow, PrevArrow } from './ArrowsComponent';

const HeroCarousel = () => {
  const [images ,setImages]=useState([
    {backdrop_path: "https://assets-in.bmscdn.com/promotions/cms/creatives/1685964734910_summeractiviesdesktop.avif",
      },
    { backdrop_path: "https://assets-in.bmscdn.com/promotions/cms/creatives/1682617779318_webbannernpa.jpg",
    },
    { backdrop_path: "https://assets-in.bmscdn.com/promotions/cms/creatives/1684735415407_gcsalebannerdesktop.jpg",
  },
  ])
  const settingsLG={
    arrows:true,
    slidesToShow:1,
    infinite:true,
    speed:500,
    slideToScroll:1,
    nextArrow: <NextArrow/>,
    prevArrow:<PrevArrow/>,
    autoplay:true,
    speed:2000,
    autoplaySpeed:3000,
    cssEase:"linear"
  }
  const settings={
    arrows:true,
    slidesToShow:1,
    infinite:true,
    speed:500,
    slideToScroll:1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    autoplay:true,
    speed:2000,
    autoplaySpeed:3000,
    cssEase:"linear"
  }
  return (
        <>
        <div className='lg:hidden'>
          <HeroSlider {...settings}>
            {
              images.map((images,index)=>(
                <div className='w-full h-56 md:h-80 py-3' key={index}>
                  <img src={images.backdrop_path} alt='Hero Banner'className='w-full h-full rounded-md object-contain'/>
                </div>
              ))
            }
          </HeroSlider>
        </div>
        <div className='hidden lg:block'>
        <HeroSlider {...settingsLG}>
            {
              images.map((images,index)=>(
                <div className='w-full h-96 px-8 py-8' key={index}>
                  <img src={images.backdrop_path} alt='Hero Banner'className='w-full h-full rounded-md object-cover object-center'/>
                </div>
              ))
            }
          </HeroSlider>
        </div>
        </>
  )
}

export default HeroCarousel