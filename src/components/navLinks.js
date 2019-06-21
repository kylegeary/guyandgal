import React from "react"
import { Link } from "gatsby"

const NavLinks = () => (
  <div className="navlinks">
    <Link to="/" className="navlinks__link">
      Home
    </Link>
    <Link to="/posts" className="navlinks__link">
      Posts
    </Link>
    <Link to="/recipes" className="navlinks__link">
      Recipes
    </Link>
    <Link to="/about" className="navlinks__link">
      About
    </Link>
  </div>
)

export default NavLinks
