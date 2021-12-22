import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"
import styled from "styled-components"

const ContactFormContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`

export default () => {
  return (
    <Layout>
      <ContactFormContainer>
        {/* <div className="formContainer"> */}
        <h1>Contact</h1>
        <ContactForm />
        {/* </div> */}
      </ContactFormContainer>
    </Layout>
  )
}
