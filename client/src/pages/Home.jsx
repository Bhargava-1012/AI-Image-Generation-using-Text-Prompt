import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonial'
import GenerateBtn from '../components/GenerateBtn'
import Login from '../components/Login'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Testimonials/>
      <GenerateBtn/>
      
    </div>
  )
}

export default Home
