import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import { Normalize } from 'styled-normalize'

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
        <Normalize />
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
