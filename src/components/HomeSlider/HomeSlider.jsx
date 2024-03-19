import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function HomeSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1}
  return<>
  <div>
        <Slider {...settings}>
          <div>
            <img className='w-100' style={{height:'400px'}} src={require("../../images/slider-image-1.jpeg")}></img>
          </div>
          <div>
          <img className='w-100' style={{height:'400px'}} src={require("../../images/slider-image-2.jpeg")}></img>
          </div>
          <div>
          <img className='w-100' style={{height:"400px"}} src={require("../../images/slider-image-3.jpeg")}></img>
          </div>
          <div>
          <img className='w-100' style={{height:"400px"}} src={require("../../images/slider-2.jpeg")}></img>
          </div>
        </Slider>
      </div></>
}
