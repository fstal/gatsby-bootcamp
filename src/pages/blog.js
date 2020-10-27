import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {data.allMarkdownRemark.edges.map((el, i) => {
          const { title, date } = el.node.frontmatter
          return (
            <li key={i}>
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage
