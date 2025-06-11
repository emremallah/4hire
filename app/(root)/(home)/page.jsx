import CarCategoriesSection from '@/components/carcategoriessetion'
import LuxuryCarSelection from '@/components/carselection'
import ContactUs from '@/components/ContactUs'
import Hero from '@/components/hero'
import CustomerReviews from '@/components/reviews'
import WhyChooseUs from '@/components/whyus'
import React from 'react'

function page() {
  return (
    <div>
      <Hero />
      <CarCategoriesSection />
      <LuxuryCarSelection />
      <WhyChooseUs />
      <CustomerReviews />
      <ContactUs />

    </div>
  )
}

export default page
