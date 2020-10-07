import React from "react"
import Layout from "./components/layout"

const Contact = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <ul>
        <li>Name: Filip Stål</li>
        <li>Adress: Stora Gatan 123</li>
        <li>Phone: 012 123 12 12</li>
        <li>
          linked in:{" "}
          <a target="_blank" href="https://www.linkedin.com/in/filip-stal/">
            Filip Stål
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default Contact
