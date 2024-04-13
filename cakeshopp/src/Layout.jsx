import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './component/Header';
import Footer from './component/Footer';

function Layout() {
  return (
    <>
        <Header />
        {/* dynamic componen push kr rhe h */}
        <Outlet />  
        <Footer />
    </>
  )
}

export default Layout