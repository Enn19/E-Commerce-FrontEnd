import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { ColorRing, FallingLines } from 'react-loader-spinner';
import { CartContext } from '../../context/cartContext';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';
export default function ProductDetails() {
  
     const [cartLooder, setCartLooder] = useState(false)
    const{addProduct,addProductToWishList}= useContext(CartContext)
    //cart
    async function addProductToCart(id) {
      setCartLooder(true)
     const res= await addProduct(id)
     if (res.status=="success") {
      toast.success(res.message,{
        duration:2000
      })
    }else{
      toast.error("Error Happened")
    }
    setCartLooder(false)
  }

    const { id } = useParams();
  
    function getProductDetails() {
      return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    }
  //////////
  //wish list
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



    const { data, isLoading } = useQuery("productDetails", getProductDetails);
  
    if (isLoading) {
      return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
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
      );
    }
  
    return<>
    <Helmet>
      <title>{data.data.data.title.split(" ").slice(0,2).join(" ")}</title>
    </Helmet>
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-md-4">
            <figure>
              {data && data.data && data.data.data && (
                <img src={data.data.data.imageCover} className="w-100" alt="Product" />
              )}
            </figure>
          </div>
          <div className="col-md-8">{<div className='details  '>
            <h1>{data.data.data.title}</h1>
            <p className="text-muted">{data.data.data.description.split(" ").slice(0,20).join(" ")}</p>
            <div className="d-flex justify-content-between align-items-center">
          <p>Price:{data.data.data.price}EGP</p>
          <p><span><i className="fa-solid fa-star text-yellow"></i></span>{data.data.data.ratingsAverage}</p>
          </div>
          <i onClick={()=>ProductWishList (data.data.data.id)} className="fa-solid fa-heart h3 ms-500"></i>
          <button onClick={()=>addProductToCart(data.data.data.id)} className='w-100 rounded-3 main-bg-color text-white py-2 border-white'> 
         {cartLooder? <FallingLines
           color="#fff"
          width="30"
           visible={true}
            ariaLabel='falling-lines-loading'
            />:" +Add To Cart"} 
          </button>
            </div>}</div>
        </div>
      </div>
      </>
    ;
  }