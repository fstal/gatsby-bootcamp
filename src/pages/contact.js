import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <ul>
        <li>Name: Filip Stål</li>
        <li>Adress: Stora Gatan 123</li>
        <li>Phone: 012 123 12 12</li>
        <li>
          linked in:
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/filip-stal/"
          >
            Filip Stål
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default Contact
