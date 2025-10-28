import React from 'react'
import HeroBanner from './Component/HeroBanner'
import SignatureDishes from './Component/SignatureDishes'
import OurStory from './Component/OurStory'
import ExperienceRoyalDining from './Component/ExperienceRoyalDining'
import Testimonials from './Component/Testimonials'
import EventsOffers from './Component/EventsOffers'
import Gallery from './Component/Gallery'
import ChefShowcase from './Component/ChefShowcase'
import ReservationSystem from './Component/ReservationSystem'
import ContactLocation from './Component/ContactLocation'
import FAQ from './Component/FAQ'
function Index() {
  return (
<div className="min-h-screen bg-soft-cream overflow-x-hidden ">
      <HeroBanner />
        <SignatureDishes />
        {/* <MenuPage /> */}
        {/* <AboutPage /> */}
        <OurStory />
        <ChefShowcase />
        <Testimonials />
        <EventsOffers />
        <Gallery />
        <ReservationSystem />
        <FAQ />
        <ContactLocation />
        <ExperienceRoyalDining />
    </div>

  )
}

export default Index
