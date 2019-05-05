import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const About = () => {
  return (
    <Layout>
      <div>
        <Head title="About" />
        <h1>About</h1>
        <p>Hello my name is Cesar!</p>
        <p>
          <Link to="/contact">Contact me.</Link>
        </p>
      </div>
    </Layout>
  )
}

export default About
