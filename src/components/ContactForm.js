import React from 'react';
import useForm from '../hooks/useForm';
import validate from './ContactFormValidation';

const ContactForm = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(login, validate);

  function login() {
    console.log(values);
  }

  return (
    <form method="post" onSubmit={handleSubmit} netlify-honeypot="bot-field" data-netlify="true" name="contact">
      <input type="hidden" name="bot-field" aria-label="Netlify hidden input to handle submit" />
      <input type="hidden" name="form-name" value="contact" aria-label="Netlify hidden input to handle submit" />
      <div className="field">
        {errors.name ? <label style={{ color: "red" }} htmlFor="name" >{errors.name}</label> : <label htmlFor="name">Name</label>}
        <div>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name || ''}
            aria-label="Enter Name Field"
          />
        </div>
      </div>
      <div>
        {errors.email ? <label style={{ color: "red" }} htmlFor="email">{errors.email}</label> : <label htmlFor="email">Email</label>}
        <div>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email || ''}
            aria-label="Enter Email Field"
          />
        </div>
      </div>
      <div>
        {errors.message ? <label style={{ color: "red" }} htmlFor="message" >{errors.message}</label> : <label htmlFor="message">Message</label>}
        <div>
          <textarea type="text" name="message" onChange={handleChange} value={values.message || ''} aria-label="Enter Message Field" />
        </div>
      </div>
      <button type="submit">Send Message</button>
    </form >
  )
}

export default ContactForm;
