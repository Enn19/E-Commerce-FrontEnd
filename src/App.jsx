import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Products from './components/PRODUCTS/Products'
import Login from './components/login/Login';
import Register from './components/Register/Register';
import Brands from './components/brands/Brands';
import Category from './components/category/Category';
import Notfound from './components/notfound/Notfound';
import Profile from './components/Profile/Profile';
import { AuthProvider } from './context/authContext';
import ProRoute from './components/protectedRoute/proRoute';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductDetails from './components/productDetails/ProductDetails';
import Cart from './components/cart/Cart';
import { CartContextProvider } from './context/cartContext';
import { Toaster } from 'react-hot-toast';
import Payment from './components/payment/Payment';
import AllOrders from './components/allOrders/AllOrders';
import { Offline } from 'react-detect-offline';
import WishList from './components/wish list/WishList';



const myRoute = createBrowserRouter([
  { path:"/",element:<Layout/>,children:[{
    path :"/",element:<Products/>}
   , {path :"Products",element:<Products/>}
    , {path :"Login",element:<Login/>},
    {path :"Profile",element:<ProRoute><Profile/></ProRoute>},
    {path :"PrductDetails/:id",element:<ProRoute><ProductDetails/></ProRoute>},
    {path :"Register",element:<ProRoute><Register/></ProRoute>},
    {path :"Cart",element:<ProRoute><Cart/></ProRoute>}
    ,{path :"Brands",element:<ProRoute><Brands/></ProRoute>}
    ,{path :"WishList",element:<ProRoute><WishList/></ProRoute>}
    ,{path :"AllOrders",element:<ProRoute><AllOrders/></ProRoute>}
   ,{path :"category",element:<ProRoute><Category/></ProRoute>}
   ,{path :"Payment",element:<ProRoute><Payment/></ProRoute>}
   ,{path :"*",element:<Notfound/>}
  ]

  }
])

export default function App() {
  let   clientQuery =new QueryClient;
  return <>
  <QueryClientProvider client={clientQuery}>
  <CartContextProvider>
  <AuthProvider>
  <RouterProvider router={myRoute}/>
  </AuthProvider>
  </CartContextProvider>
  <Toaster/>
  </QueryClientProvider>
  <Offline>
    <div className="bg-dark position-fixed text-white bottom-0 start-0 p-3 rounded-3">
      Ooops.... You Are Offline
    </div>
  </Offline>
    </>
}

