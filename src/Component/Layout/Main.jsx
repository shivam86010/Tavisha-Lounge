import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './HeaderChild'
import Footer from './Footer'

function Main() {
  return (
    <div>
      <Header/ >
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main
