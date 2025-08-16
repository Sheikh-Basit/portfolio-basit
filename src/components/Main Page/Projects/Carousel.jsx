import React from 'react'
import Slider from "react-slick";
import './Carousel.css'
const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 3000
      };
  return (
    <Slider {...settings} >
            <div className='bg-green-300 h-20 w-full'>
              <h3>1</h3>
            </div>
            <div className='bg-green-300 h-20 w-full'>
              <h3>2</h3>
            </div>
            <div className='bg-green-300 h-20 w-full'>
              <h3>3</h3>
            </div>
            <div className='bg-green-300 h-20 w-full'>
              <h3>4</h3>
            </div>
            <div className='bg-green-300 h-20 w-full'>
              <h3>5</h3>
            </div>
            <div className='bg-green-300 h-20 w-full'>
              <h3>6</h3>
            </div>
          </Slider>
  )
}

export default Carousel
