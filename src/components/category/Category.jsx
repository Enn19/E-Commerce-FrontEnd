import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { Circles } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
export default function Category() {
  function category() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
   }
const{data,isLoading}= useQuery("Catergory",category,{
   refetchOnMount:false
})

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
 <Helmet>
  <title>Categories</title>
 </Helmet>
 <div>
      <div className="container mt-5 pt-5">
        <div className="row g-3  ">
         {data?.data.data.map(function(catoryPage ,idx){
           return<div key={idx} className="col-md-4 "><div className='border rounded-3 '>
           <img className='w-100 img-fluid' style={{height:'350px'}} src={catoryPage.image}></img>
           <h1 className='mt-3 text-center main-color'>{catoryPage.name}</h1>
         </div></div>
         })}
     </div></div></div></>
}
