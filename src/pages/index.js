import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import Img from 'gatsby-image'

export const query = graphql`
  query {
    file(relativePath: { eq: "grass.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Head title="Web Dev" />
      <main>
        <Img fixed={data.file.childImageSharp.fixed} />
      </main>
    </Layout>
  )
}

export default IndexPage
