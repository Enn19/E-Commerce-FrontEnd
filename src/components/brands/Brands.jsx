import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { Circles } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
export default function Brands() {
  function brand() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
   }
const{data,isLoading}= useQuery("brand",brand,{
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
      


       
    //    function brandDetails() {
    //     return axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${brandIdDetials}`)
    //    }
    // const res= useQuery("brandDetails",brandDetails,{
    //    refetchOnMount:false
    // })
    
    //        if (isLoading) {
    //            return<>
    //            <div className="d-flex vh-100 justify-content-center align-items-center">
    //            <Circles
    //  height="80"
    //  width="80"
    //  color="#4fa94d"
    //  ariaLabel="circles-loading"
    //  wrapperStyle={{}}
    //  wrapperClass=""
    //  visible={true}
    // /></div></>
    //        }
       
// const [brandIdDetials, setBrandIdDetials] = useState(null)
// setBrandIdDetials(data._id)
//       async function brandDetails() {
//         try {
//           const {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/64089ceb24b25627a2531596`)
//           return(data)
//           console.log(data)
//         } catch (error) {
//           console.log("error",error)
//         }
        
//        }
//        useEffect(() => {
//         brandDetails()
//        }, [])
      
  
    // function getProductMOdelDetails(id) {
    //   return axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
    // }
    // const res= useQuery("productModelDetails", getProductMOdelDetails);
 
    // if (isLoading) {
    //   return (
    //     <div className="d-flex vh-100 justify-content-center align-items-center">
    //       <ColorRing
    //         visible={true}
    //         height="80"
    //         width="80"
    //         ariaLabel="blocks-loading"
    //         wrapperStyle={{}}
    //         wrapperClass="blocks-wrapper"
    //         colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    //       />
    //     </div>
    //   );
    // }

      //  const res=data._id
  
      //  function getBrandDetails() {
      //    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${_id}`);
      //  }
      //  const {data} = useQuery("brandDetails", getBrandDetails);
    //    const [BrandDetails, setBrandDetails] = useState(null)
    // BrandDetails=res.data;

 return<>
 <Helmet>
  <title>Brands</title>
 </Helmet>
 <div>
      <div className="container mt-5 pt-5">
        <h1 className='main-color text-center mb-5'>All Brands</h1>
        <div className="row g-3 ">
         {data?.data.data.map(function(brand,idx){
           return<div key={idx} className="col-md-3 "><div className='border border-3'  data-bs-toggle="modal" data-bs-target="#exampleModal">
           <img  className='w-100 img-fluid' style={{height:'200px'}} src={brand.image}></img>
           <h3 className='mt-3 text-center main-color'>{brand.name}</h3>
         </div>
           
           {data?.data.data.map(function (model,indx) {
  return<div key={indx} className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="d-flex justify-content-center align-items-center">
          <div >
            <h1 className="main-color">{model.name}</h1>
            <p>{model.name}</p>
          </div>
          <div>
          <img  className='w-100 img-fluid' style={{height:'200px'}} src={model.image}></img>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  
})}
</div>
         })}
     </div></div></div></>
}
