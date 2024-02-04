import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
   <>
   <Outlet/>
   <NavBar></NavBar>
   
   </>
  )
}

export default Layout