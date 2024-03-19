import React,{useContext} from 'react'
import { authContext } from './../../context/authContext';
import { Navigate } from 'react-router-dom';

export default function ProRoute({children}) {
  const {token} = useContext(authContext)
    // if (token==null) {
    //     return<Navigate to="/Login"></Navigate>
    // }
  return <>
  {children}
  </>
}
