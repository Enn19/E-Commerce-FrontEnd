import jwtDecode from 'jwt-decode';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ColorRing } from 'react-loader-spinner';

export default function Profile() {
  const [name, setName] = useState(null)
  useEffect(() => {
   const x= jwtDecode(localStorage.getItem("tkn"))
   setName(x.name)
  }, [])
  if (name===null) {
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
  </div></>
  }
  return <>
  <Helmet><title>Profile</title></Helmet>
  <div className="container mt-5 pt-5">
    <div className="text-center ">
      <h1>Hello ya {name}</h1>
    </div>
  </div>
  </>
}
