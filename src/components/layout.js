import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ isHomePage, children }) => {
  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">
              <StaticImage
                src="../../content/assets/logo.PNG"
                alt="Michał Mięculewicz-Wielgus"
                width={300}
              />
            </Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            <StaticImage
              src="../../content/assets/logo.PNG"
              alt="Michał Mięculewicz-Wielgus"
              width={300}
            />
          </Link>
        )}
        <ul>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">O mnie</Link>
          </li>
          <li>
            <Link to="/">Kontakt</Link>
          </li>
        </ul>
      </header>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  )
}

export default Layout
