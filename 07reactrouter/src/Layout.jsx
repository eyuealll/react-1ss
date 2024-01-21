/* the header always remains also the footer always remains same only the inner page is change that why we use this layOut component */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Layout = () => {
  return (
    <>
    <Header/>{/* this is always there */}
    <Outlet/> {/* this is the special element react-router-dom gives us for the use of remaining the header and the footer element at the same place and use any info in in side header and footer by the place of Outlet*/}
    <Footer />{/* this is always there */}
    </>
  )
}

export default Layout