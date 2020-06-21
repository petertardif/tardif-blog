import React from "react"
import Layout from "../components/layout";
import ContactForm from '../components/ContactForm';

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Contact</h1>
        <ContactForm />
      </div>
    </Layout>
  )
}
