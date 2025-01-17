import React from 'react'
import SearchBar from '../components/SearchBar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <Outlet/>
    </>
  )
}
export default Layout
