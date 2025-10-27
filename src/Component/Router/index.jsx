import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MenuPage from '../../Page/MenuPage/Index'
import Layout from '../Layout/Main'
import HomePage from '../../Page/HomePage/index'
import AboutPage from '../../Page/About'

function index() {
  return (
 <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/about' element={<AboutPage />} />
  
        </Route>
      </Routes>
    </div>
  )
}

export default index
