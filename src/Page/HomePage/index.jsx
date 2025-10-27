import React from 'react'
import HeroBanner from './Component/HeroBanner'
import SignatureDishes from './Component/SignatureDishes'
import OurStory from './Component/OurStory'
import ExperienceRoyalDining from './Component/ExperienceRoyalDining'
function Index() {
  return (
<div className="min-h-screen bg-soft-cream ">
      <HeroBanner />
      <SignatureDishes />
      <OurStory />
      <ExperienceRoyalDining />
    </div>

  )
}

export default Index
