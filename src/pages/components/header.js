import React from "react"
import { Link } from "gatsby"
// import "./header.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
  //console.log(headerStyles)
  return (
    <div className={headerStyles.container}>
      <h1>
        <Link className={headerStyles.link} to="/">
          My Portfolio
        </Link>
      </h1>
      <nav className={headerStyles.menu}>
        <Link
          className={headerStyles.link}
          activeClassName={headerStyles.linkActive}
          to="/"
        >
          Home
        </Link>
        <Link
          className={headerStyles.link}
          activeClassName={headerStyles.linkActive}
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className={headerStyles.link}
          activeClassName={headerStyles.linkActive}
          to="/about"
        >
          About
        </Link>
        <Link
          className={headerStyles.link}
          activeClassName={headerStyles.linkActive}
          to="/contact"
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}

export default Header
