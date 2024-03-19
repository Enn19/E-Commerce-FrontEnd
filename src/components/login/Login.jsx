import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { FallingLines } from 'react-loader-spinner';
import {useNavigate} from 'react-router-dom';
import { authContext } from './../../context/authContext';
import { Helmet } from 'react-helmet';
 
export default function Login() {

 const {setToken}= useContext(authContext);
  
  const [eerMsg, setEerMsg] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
 const navigate= useNavigate()
  let user ={
  email:"",
  password:""
}
async function loginUser(values) {
  console.log(values)
  setEerMsg(null)
  setIsLoading(true)
  try{
    const{data}= await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values)
    console.log(data)
    if (data.message ==="success") {
      localStorage.setItem('tkn',data.token)
      setToken(data.token)
      setSuccess("Welcome Back")
      setTimeout(function () {
        navigate("/Products")
        
      },1000)
    }
  }catch(err){
    console.log("error",err.response.data.message)
    setEerMsg(err.response.data.message)
  
}
setIsLoading(false)


}

const formikObj= useFormik({
  initialValues:user,
  onSubmit:loginUser,
  validate:function (values) {
    setEerMsg(null)
    const errors={};
    
    if (values.email.includes("@")===false||values.email.includes(".")===false) {
      errors.email="Email is invalide"
    }
    if(values.password.length<6||values.password.length>12){
      errors.password="password must be at least 6 character at most 12 charactar"
    }
    return errors
  }
});






  return <>
  <Helmet>
    <title>Login</title>
  </Helmet>
  <div className="w-75 m-auto pt-5">
    {eerMsg?<div className="alert alert-danger" >{eerMsg}</div>:''}
    {success?<div className="alert alert-success" >{success}</div>:''}
  <h2> Login Now:</h2>
  <form onSubmit={formikObj.handleSubmit}>
    

    <label htmlFor='email'>Email :</label>
    <input onBlur={formikObj.handleBlur}  value={formikObj.values.email} onChange={formikObj.handleChange} id='email' type='email' placeholder='email' className='form-control mb-3'></input>
    {formikObj.errors.email && formikObj.touched.email? <div className='alert alert-danger'>{formikObj.errors.email}</div>:''}

    <label htmlFor='password'>Password :</label>
    <input onBlur={formikObj.handleBlur}  value={formikObj.values.password} onChange={formikObj.handleChange} id='password' type='password' placeholder='password' className='form-control mb-3'></input>
    {formikObj.errors.password && formikObj.touched.password? <div className='alert alert-danger'>{formikObj.errors.password}</div>:''}

    

    <button disabled={formikObj.isValid ===false||formikObj.dirty===false} type='submit' className='btn btn-success'>
    {isLoading?<FallingLines
  color="#fff"
  width="50"
  visible={true}
  ariaLabel='falling-lines-loading'
/>:'Login'}
    </button>

  </form>
  </div>
  </>
}