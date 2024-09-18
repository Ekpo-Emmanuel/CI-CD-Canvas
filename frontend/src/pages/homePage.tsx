import React from 'react'
import Header from '../components/ui/header'
import Footer from '../components/ui/footer'
import HeroHome from '../components/Landing page/hero'

export default function HomePage() {
  return (
    <div className='font-inter tracking-tight text-gray-900 antialiased'>
      <Header />
      <HeroHome />
      <Footer />
    </div>
  )
}
