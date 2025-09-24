import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import WhyChooseUs from './components/WhyUS'
import Services from './components/Services'
import MeetAttorneys from './components/Team'
import Testimonials from './components/Review'
import ContactForm from './components/Contact'
import FAQ from './components/Faqs'
import TrustSignals from './components/TrustSignals'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <WhyChooseUs/>
    <Services/>
    <MeetAttorneys/>
    <Testimonials/>
    <ContactForm/>
    <FAQ/>
    <TrustSignals/>
    <Footer/>
    </>
  )
}

export default App