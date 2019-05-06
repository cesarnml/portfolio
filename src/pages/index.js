import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import Head from '../components/head'

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
        <Text>I wonder what will be this font size.</Text>
        <Img fixed={data.file.childImageSharp.fixed} />
      </main>
    </Layout>
  )
}

export default IndexPage

const Text = styled.p`
  font-size: 1rem;
`
