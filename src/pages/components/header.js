import React from "react"
import { Link } from "gatsby"

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}
const menuStyle = {
  width: "20vw",
  display: "flex",
  justifyContent: "space-evenly",
}

const Header = () => {
  return (
    <div style={headerStyle}>
      <h1>
        <Link to="/">My Portfolio </Link>
      </h1>
      <nav style={menuStyle}>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Header
