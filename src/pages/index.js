import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Web Dev" />
      <div>
        <h1>Hello.</h1>
        <h2>
          I'm Cesar, a full-stack developer, living in beautiful Santa Monica.
        </h2>
      </div>
    </Layout>
  )
}

export default IndexPage
