import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    # Write your query or mutation here
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div>
        <Head title="Blog" />
        <h1>Blog</h1>
        <ol>
          {data.allContentfulBlogPost.edges.map((edge, index) => (
            <li key={index}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title} </h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
