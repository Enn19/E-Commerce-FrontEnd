import React, { useContext } from 'react'
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import HomeSlider from '../HomeSlider/HomeSlider';
import CategorySlider from '../catergorySlider/CategorySlider';
import { Link } from 'react-router-dom';
import { CartContext } from './../../context/cartContext';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

export default function Products() {

  const{addProduct, addProductToWishList}= useContext(CartContext)
  ///cart
  async function addProductToCart(id) {
   const res= await addProduct(id)
    if (res.status=="success") {
      toast.success(res.message,{
        duration:2000
      })
    }else{
      toast.error("Error Happened")
    }
  }

  function getAllProduct() 
  {return axios.get("https://ecommerce.routemisr.com/api/v1/products")  
  }
///wish list

async function ProductWishList(id) {
  const res= await addProductToWishList(id)
   if (res.status=="success") {
     toast.success(res.message,{
       duration:2000
     })
   }else{
     toast.error("Error Happened")
   }
 }




  const{data,isLoading}=useQuery("allProduct",getAllProduct)

    if (isLoading) {
      return<>
      <div className="d-flex vh-100 justify-content-center align-items-center ">
  <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
   />
  </div>
      </>
    }

  return <>
  <Helmet>
    <title>
      Products
    </title>
  </Helmet>
  <div className="container py-5 mt-5">
    <div className="row gx-0 mb-3">
      <div className="col-md-9"><HomeSlider/></div>
      <div className="col-md-3">
      <img className='w-100' style={{height:'200px'}} src={require("../../images/blog-img-1.jpeg")}></img>
      <img className='w-100' style={{height:'200px'}} src={require("../../images/blog-img-2.jpeg")}></img>
      </div>
    </div>
    </div>
    <div className=" my-5 gx-0">
      <CategorySlider/>
    </div>
    <div className="container py-5">
    <div className="row g-4">
      {data?.data.data.map(function (product,idx) {
        return  <div key={idx} className="col-md-3">
        <Link to={`/PrductDetails/${product.id}`}>
        <div  className="product">
          <img src={product.imageCover} className='w-100'></img>
          <h6 className='main-color'>{product.category.name}</h6>
          <h5>{product.title.split(" ").slice(0,2).join(" ")}</h5>
          <div className="d-flex justify-content-between align-items-center">
          <p>{product.price}EGP</p>
          <p><span><i className="fa-solid fa-star text-yellow"></i></span>{product.ratingsAverage}</p>
          </div>
        </div></Link>
        <i onClick={()=>{ProductWishList(product.id)}} className="fa-solid fa-heart h3 ms-50"></i>
        <button onClick={()=>{addProductToCart(product.id)}} className='w-100 rounded-3 main-bg-color text-white py-1 border-white'>+Add To Cart</button>
        
      </div>
      })}
    </div>
  </div>
  </>
  }
