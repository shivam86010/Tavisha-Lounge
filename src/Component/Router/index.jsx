import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MenuPage from '../../Page/MenuPage/MenuMainPage'
import Layout from '../Layout/Main'
import HomePage from '../../Page/HomePage/index'
import Gallery from '../../Page/Gallery/GalleryPage'
import Contacts from '../../Page/Contacts/Main'
import ReservationPage from '../../Page/Reservation/Main'
import Login from '../../Page/Login/Login';
import Signup from '../../Page/Login/Signup';
import ReservationTable from '../../Page/Reservations'
import BlogPage from '../../Page/BlogPage'
import BlogPost from '../../Page/BlogPost'
import Reservations from '../../Page/ReservationsHeader'
import RoyalDishDetail from '../../Page/MenuPage/Components/RoyalDishDetail'
import VenueDetailPage from '../../Page/VenueDetailPage';
import AboutUsPage from '../../Page/about-us'

import PrivateViewingPage from '../PrivateViewingPage';
import CelebrationPlanningPage from '../CelebrationPlanningPage';
import PrivateDiningPage from '../PrivateDiningPage';
import WineTastingPage from '../WineTastingPage';

function index() {
  return (
 <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/private-viewing" element={<PrivateViewingPage />} />
        <Route path="/celebration-planning" element={<CelebrationPlanningPage />} />
        <Route path="/private-dining" element={<PrivateDiningPage />} />
        <Route path="/wine-tasting" element={<WineTastingPage />} />
          <Route path="/venue/:venueId" element={<VenueDetailPage />} />
          <Route path='/about-us' element={<AboutUsPage/>} />
          <Route path='/menu' element={<MenuPage />} />
           <Route path="/menu/:dishId" element={<RoyalDishDetail />} />
        
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/reservation' element={<ReservationPage/>} />
           <Route path="/reservations" element={<Reservations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
            <Route path="/blog" element={<BlogPage />} />
        
  <Route path="/blog/:id" element={<BlogPost />} />
          <Route path='/reservation-table' element={<ReservationTable/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default index
