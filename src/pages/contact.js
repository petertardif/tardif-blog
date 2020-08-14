import React from "react"
import Layout from "../components/layout";
import ContactForm from '../components/ContactForm';
import styled from "styled-components";

const ContactFormContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;

  & .formContainer {
    margin: 2.5rem;
    max-width: 800px;
    padding: 0px 20px 10px 20px;
    flex: 1;
}
`;

export default () => {
  return (
    <Layout>
      <ContactFormContainer>
        <div className="formContainer">
          <h1>Contact</h1>
          <ContactForm />
        </div>
      </ContactFormContainer>
    </Layout>
  )
}
