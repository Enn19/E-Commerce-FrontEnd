import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useQuery } from 'react-query';
import { Circles } from 'react-loader-spinner';
export default function CategorySlider() {
    function category() {
     return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
    }
 const{data,isLoading}= useQuery("Catergory",category,{
    refetchOnMount:false
 })
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 500,
        dots: true,
        infinite: true}

        if (isLoading) {
            return<>
            <div className="d-flex vh-100 justify-content-center align-items-center">
            <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/></div></>
        }
  return<>
  <div className=' overflow-hidden'>
        <Slider {...settings}>
          {data?.data.data.map(function(catory ,idx){
            return<div  key={idx}>
            <img className='w-100' style={{height:'250px'}} src={catory.image}></img>
            <h6 className='mt-3'>{catory.name}</h6>
          </div>
          })}
        </Slider>
      </div></>
}
