import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { ColorRing } from 'react-loader-spinner';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Cart() {
  async function incremunt(id,count) {
    const res=await updateItem(id,count)
    if (res.status==="success") {
      toast.success("Product updated")
     }else{
      toast.error("Error in updeted Element")
     }
  }
  async function delElement(id) {
    const res =await deleteItem(id)
    if (res.status==="success") {
     toast.success("Product Deleted")
    }else{
     toast.error("Error in Delete Element")
    }
     
   }
 const{cartProduct,clearAllProduct,updateItem,totalCartProduct,numOfCartItem,deleteItem}= useContext(CartContext)
 if (cartProduct===null) {
  return<>
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
  </>
  
 }
 if (cartProduct.length === 0) {
  return<>
  <h1 className='pt-5 mt-5'>No Data Found In Cart Get more Products <Link to="/Products"> Click Here....</Link></h1></>
  
}
  return <>
  <Helmet>
    <title>Cart</title>
  </Helmet>
  <div className="container my-5 bg-grey py-5">
   <div className="row">
   <div className='d-flex justify-content-between'>
      <h1>Cart Shop</h1>
      <Link to={"/Payment"} className='btn btn-primary fs-4 '>Check Out</Link>
    </div>
     <div className="d-flex justify-content-between mt-3">
     <h5>Total price : <span className='main-color'>{totalCartProduct}</span></h5>
      <h5>Total number of items : <span className='main-color'>{numOfCartItem}</span></h5>
    </div>
   </div>
   {cartProduct.map(function (product,idx) {
    return<div key={idx} className="row align-items-center border-bottom border-3 my-5 pb-3">
    <div className="col-md-2">
      <img src={product.product.imageCover}className='w-100'></img>
    </div>
    <div className="col-md-8">
      <h3>{product.product.title.split(" ").slice(0,2).join(" ") }</h3>
      <h3>{product.price} EGP</h3>
      <button onClick={()=>{delElement(product.product.id)}} className='btn btn-outline-danger '>Remove</button>
    </div>
    <div className="col-md-2">
      <div className="d-flex align-items-center">
        <button onClick={()=>{incremunt(product.product.id,product.count+1)}} className='btn btn-outline-success '>+</button>
        <span className='mx-2'>{product.count}</span>
        <button onClick={()=>{incremunt(product.product.id,product.count-1)}} className='btn btn-outline-success '>-</button>
      </div>
    </div>
   </div>
    
   })}
   <div className="d-flex align-items-center justify-content-center">
    <button onClick={()=>{clearAllProduct()}}  className='btn btn-outline-success py-3 px-4'>Clear Your Cart</button>
   </div>
  </div>
  </>
}
