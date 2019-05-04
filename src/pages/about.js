import React from 'react'
import { Link } from 'gatsby'
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Hello my name is Cesar!</p>
      <p>
        <Link to="/contact">Contact me.</Link>
      </p>
    </div>
  )
}

export default About
