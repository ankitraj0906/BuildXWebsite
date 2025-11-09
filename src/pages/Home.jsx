import React from 'react'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Testimonials from '../sections/Testimonials'

export default function Home(){
  return (
    <div className="container mx-auto px-6">
      <Hero />
      <Services />
      <Testimonials />
    </div>
  )
}
