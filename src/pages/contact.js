import React from "react"
// import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import containerStyles from "../styles/layout.module.css"
import ContactForm from "../components/ContactForm"
import styled from "styled-components"

const ContactFormContainer = styled.div`
  display: block;
  margin: 0 auto;
  min-height: 75vh;
`

export default () => {
  return (
    <div className={containerStyles.siteContainer}>
      <Header />
      <ContactFormContainer>
        <div style={{ width: "400px" }}>
          <h1>Contact</h1>
          <ContactForm />
        </div>
      </ContactFormContainer>
      <Footer />
    </div>
  )
}
