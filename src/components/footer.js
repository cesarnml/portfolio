import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      <p>© {data.site.siteMetadata.author} 2019. All rights reserved.</p>
    </footer>
  )
}

export default Footer
