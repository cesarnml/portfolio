import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import blog from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           html
  //           timeToRead
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
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
        <ol className={blog.posts}>
          {/* {data.allMarkdownRemark.edges.map((edge, index) => (
            <li className={blog.post} key={index}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title} </h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          ))} */}
          {data.allContentfulBlogPost.edges.map((edge, index) => (
            <li className={blog.post} key={index}>
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
