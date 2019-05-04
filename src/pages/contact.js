import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const Contact = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>
        Let's chat.&nbsp;
        <a href="mailto: cmejia@gmail.com">Email me!</a>
      </p>
      <p>
        Tweet at me: <a href="https://twitter.com/@cesarnm">here.</a>
      </p>
      <Footer />
    </div>
  )
}

export default Contact
