import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { CartContext } from '../../context/cartContext'
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

export default function WishList() { 
    const {wishListProduct,deleteItemFromWish,addProduct} = useContext(CartContext)
    async function delElement(id) {
        const res =await deleteItemFromWish(id)
        if (res.status==="success") {
         toast.success("Product Deleted")
        }else{
         toast.error("Error in Delete Element")
        }
         
       }
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
  return<>
  <Helmet><title>
    Wish List
    </title></Helmet>
    <div className="container mt-5 pt-5">
        <div className="row">
        <h1>Wish list Products</h1>
            <div className="d-felx justify-content-between">
            {wishListProduct.map(function (product,idx) {
    return<div key={idx} className="row align-items-center border-bottom border-3 my-5 pb-3">
    <div className="col-md-2">
      <img src={product.imageCover}className='w-100'></img>
    </div>
    <div className="col-md-8">
      <h3>{product.title}</h3>
      <h3>{product.price} EGP</h3>
      <button onClick={()=>{delElement(product._id)}} className='btn btn-outline-danger mt-2 '>Remove</button>
    </div>
    <div className="col-md-2">
      <div className="d-flex align-items-center">
        <button onClick={()=>addProductToCart(product._id)}  className='btn btn-outline-success '>Add to Cart</button>
      </div>
    </div>
   </div>
    
   })}

            </div>
        </div>
    </div>
  </>
}
