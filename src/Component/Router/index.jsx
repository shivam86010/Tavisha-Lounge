import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MenuPage from '../../Page/MenuPage/MenuMainPage'
import Layout from '../Layout/Main'
import HomePage from '../../Page/HomePage/index'
import AboutPage from '../../Page/About'
import Gallery from '../../Page/Gallery/GalleryPage'
import Contacts from '../../Page/Contacts/Main'
import ReservationPage from '../../Page/Reservation/Main'

function index() {
  return (
 <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/reservation' element={<ReservationPage/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default index
