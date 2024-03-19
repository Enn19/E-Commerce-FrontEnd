import axios from 'axios'
import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Circles } from 'react-loader-spinner'

export default function AllOrders() {
    const [userOrders, setuserOrders] = useState(null)
    useEffect(() => {
   const res=jwtDecode(localStorage.getItem("tkn"))
   userOrder(res.id)
    }, [])
    async function userOrder(id) {
        try {
            const{data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
            console.log(data)
            setuserOrders(data)
        } catch (error) {
            console.log("error",error)
        }
        
    }
    if (userOrders===null) {
        return <div className="d-flex vh-100 justify-content-center align-items-center">
        <Circles
height="80"
width="80"
color="#4fa94d"
ariaLabel="circles-loading"
wrapperStyle={{}}
wrapperClass=""
visible={true}
/></div>
    }
  return <>
  <Helmet>
    <title>All Orders</title>
  </Helmet>
  <div className="container mt-5 pt-5">
    <div className="row g-4">
        {userOrders.map(function (order,idx) {
            return<div key={idx} className="col-md-6">
            <div className="order rounded-3 bg-info p-3">
                <div className="container">
                    <div className="row">
                    {order.cartItems?.map(function (item,indx) {
                    return <div key={indx} className="col-md-4">
                        <div key={indx} className='bg-white my-2'>
                        <img src={item.product.imageCover} className='w-50'></img>
                        <h3>{item.product.title.split(" ").slice(0,2).join(" ")}</h3>
                        <h5>Count:{item.count}</h5>
                        <h5>Price:{item.price}</h5>
                    </div>
                    </div>
                })}
                    </div>
                </div>
                <p>Order with phone {order.shippingAddress.phone} and with details {order.shippingAddress.details} at{order.shippingAddress.city}</p>
                <h5>Payment Method:{order.paymentMethodType}</h5>
                <h5>Total Order Price:{order.totalOrderPrice}</h5>

            </div>
        </div>
            
        })}
    </div>
  </div>
  
  </>
}
