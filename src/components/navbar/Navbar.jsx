import React, { useContext } from 'react'
import logo from"../../images/freshcart-logo.svg";
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from './../../context/authContext';
import { CartContext } from './../../context/cartContext';
export default function Navbar() {
  const{token,setToken}=useContext(authContext);
  const{numOfCartItem}=useContext(CartContext)
 const navigate= useNavigate();
  
  function logOut(params) {
    setToken(null);
    localStorage.removeItem('tkn');
    navigate("/Login")
  }
  return<>
  <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container">
    <Link className="navbar-brand" to="/">
      <img src={logo}></img>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       {token?<> <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Products">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link position-relative"to="/Cart">Cart
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {numOfCartItem}</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to="/category">Category</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Brands">Brand</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/WishList">Wish List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AllOrders">All Orders</Link>
        </li>
        </>:""}
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center align-items-center">
      <li className="nav-item">
        <i  className="fa-brands me-2 fa-facebook "></i>
                  <i  className="fa-brands me-2 fa-twitter "></i>
                  <i  className="fa-brands me-2 fa-linkedin-in "></i>
                  <i  className="fa-brands me-2 fa-whatsapp"></i>
        </li>
        {token?<><li className="nav-item">
          <Link className="nav-link " to="/Profile">Profile</Link>
        </li>
        <li className="nav-item">
          <span onClick={logOut} style={{cursor:"pointer"}} className='nav-link'>SignOut</span>
        </li></>:<><li className="nav-item">
          <Link className="nav-link " to="/Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Register">Register</Link>
        </li></>}
      </ul>
    </div>
  </div>
</nav>
  
  </>
}
