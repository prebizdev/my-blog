import React from 'react'
import LinkComponent from './LinkComponent.js'
const NavBar = () => {
  return (
    <>
    <nav>
        <ul>
            <li>
              <LinkComponent destination="/" description="Home" className="nav-link"/>
            </li>
            <li>
              <LinkComponent destination="/about" description="About" className="nav-link"/>
            </li>
            <li>
              <LinkComponent destination="/articles-list" description="Articles" className="nav-link"/>
            </li>
        </ul>
    </nav>
         </>
  )
}

export default NavBar