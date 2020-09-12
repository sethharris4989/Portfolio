import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <ul>
      <li>
        <Link to="/resume">
          Resume
        </Link>
      </li>
      <li>
        <Link to="/page-2">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/page-2">
          Contact
        </Link>
      </li>
    </ul>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
