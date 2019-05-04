import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

const About = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>Hello my name is Cesar!</p>
      <p>
        <Link to="/contact">Contact me.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default About
