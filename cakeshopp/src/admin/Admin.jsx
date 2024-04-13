import React from 'react'
import {Outlet} from 'react-router-dom';
import DashButton from './DashButton';

function Admin() {
  return (
    <>
        <Outlet/>
        <DashButton/>
    </>
  )
}

export default Admin