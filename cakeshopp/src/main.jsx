import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

import About from './component/About.jsx'
import Contact from './component/Contact.jsx'


import Product from './component/Product.jsx'
import Cart from './component/Cart/Cart.jsx'

import { Provider } from 'react-redux'
import { store } from './Store/store.js'
import UploadForm from './admin/UploadForm.jsx'
import Admin from './admin/Admin.jsx'
import Dashboard from './admin/Dashboard.jsx'
import Payment from './component/Cart/Payment.jsx'
import CashOnDelivery from './payment/CashOnDelivery.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<App/>}/>
      <Route path='product/:productId' element={<Product/>}>
        {/* <Route path='cart' element={<Cart/>}/> */}
      </Route>
      <Route path='/product/cart' element={<Cart/>}/>
      <Route path='/payment' element={<Payment/>}>
        <Route path="cashondelivery" element={<CashOnDelivery/>}/>
        {/* <Route path="upi"/>
        <Route path="card"/>
        <Route path="netbanking"/> */}
      </Route>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='admin' element={<Admin/>}>
        <Route path='upload' element={<UploadForm/>}/>
        <Route path ='Dashboard' element={<Dashboard/>}/>
      </Route>
    </Route>
  )
 )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
