import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import { GlobalStyle } from '../styles/normalize'

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
        <GlobalStyle />
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
