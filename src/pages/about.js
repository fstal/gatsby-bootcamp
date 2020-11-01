import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me</h1>
      <ul>
        <li>Name: Filip Stål</li>
        <li>Age: 28</li>
        <li>Sex: Male</li>
        <li>Position: Frontend Dev</li>
      </ul>
      <h2>Bio</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum numquam
        doloribus soluta repellendus laborum vel, nihil distinctio laboriosam
        optio corporis et mollitia ex libero minus, enim accusantium quas,
        pariatur laudantium nostrum molestiae eveniet ullam! Quibusdam ducimus
        nostrum laboriosam accusamus pariatur!
      </p>
      <h3>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </h3>
    </Layout>
  )
}

export default About
