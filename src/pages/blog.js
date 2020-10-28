import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {data.allMarkdownRemark.edges.map((el, i) => {
          const { title, date } = el.node.frontmatter
          const { slug } = el.node.fields
          return (
            <li key={i}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
              </Link>
              <p>{date}</p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage
