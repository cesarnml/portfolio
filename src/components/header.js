import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">César Mejia</Link>
      </h1>
      <nav>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            outline: '1px solid red',
            listStyle: 'none',
          }}
        >
          <li>
            <Link
              style={{
                textDecoration: 'none',
                color: 'black',
                marginRight: '2rem',
              }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: 'none',
                color: 'black',
                marginRight: '2rem',
              }}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: 'none',
                color: 'black',
                marginRight: '2rem',
              }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
