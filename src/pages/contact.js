import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <div>
        <Head title="Contact" />
        <h1>Contact</h1>
        <p>
          Let's chat.&nbsp;
          <a href="mailto: cmejia@gmail.com">Email me!</a>
        </p>
        <p>
          Tweet at me: <a href="https://twitter.com/@cesarnm">here.</a>
        </p>
      </div>
    </Layout>
  )
}

export default ContactPage
