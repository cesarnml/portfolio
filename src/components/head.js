import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet
      title={`${data.site.siteMetadata.title} | ${title}`}
      meta={[
        { name: 'description', content: 'César Mejia Web Portfolio and Blog' },
        {
          name: 'keywords',
          content:
            'césar, cesar, mejia, napoleon, leiva, web, portfolio, software, engineer, developer',
        },
      ]}
    >
      <html lang="en" />{' '}
    </Helmet>
  )
}

export default Head
