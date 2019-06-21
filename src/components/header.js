import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavLinks from "./navLinks"

const Header = ({ siteTitle }) => (
  <>
    <header className="header">
      <style>
        @import
        url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Roboto|Josefin+Sans|open+sans&display=swap');
      </style>
      <div className="header__content">
        <h1 className="header__title">
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <NavLinks />
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Guy & Gal Travel`,
}

export default Header
