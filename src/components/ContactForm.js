import React from 'react';
import useForm from '../hooks/useForm';
import SuccessMessage from './SuccessMessage';
import validate from './ContactFormValidation';
import styled from "styled-components";

const LabelContainer = styled.label`
  max-width: 400px;
  margin-bottom: 1.45rem;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px solid darkgray;
  border-radius: 3px;
  outline-width: 3px;
  outline-offset: -2px;
  background-color: var(--fourth-color);
  box-shadow: inset 0 0 2px #999999;

  & span {
    color: darkgray;
    font-size: 12px;
    margin-bottom: 5px;
  }

  & input, textarea {
    border: none;
    outline: none;
    background: none;
    font-size: 16px;
  }

  & .error {
    color: red;
    font-weight: bold;
  }

  &:focus-within > span {
    font-weight: bold;
    color: var(--second-color);
  }
`;

const Button = styled.button`
  background-color: var(--third-color);
  color: white;  
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  margin-bottom: 1.45rem;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid var(--third-color);
  border-radius: 3px;
  outline-width: 3px;
  outline-offset: -2px;

  &:hover {
    font-weight: bold;
    background: var(--second-color);
  }
`;

const ContactForm = () => {
  const { values, handleChange, handleSubmit, errors, isSent } = useForm(validate);

  return (
    <>
      <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" aria-label="hidden field, do not use" />
        <input type="email" name="email" aria-label="hidden field, do not use" />
        <textarea name="message" aria-label="hidden field, do not use"></textarea>
      </form>
      {isSent ? <SuccessMessage /> : <></>}
      <form method="post" onSubmit={handleSubmit} >
        <LabelContainer htmlFor="name">
          {errors.name ? <span className="error">{errors.name}</span> : <span>Name</span>}
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name || ''}
            aria-label="Enter Name Field"
          />
        </LabelContainer>
        <LabelContainer>
          {errors.email ? <span className="error">{errors.email}</span> : <span>Email</span>}
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email || ''}
            aria-label="Enter Email Field"
          />
        </LabelContainer>
        <LabelContainer>
          {errors.message ? <span className="error">{errors.message}</span> : <span>Message</span>}
          <textarea
            type="text"
            name="message"
            onChange={handleChange}
            value={values.message || ''}
            aria-label="Enter Message Field"
          />
        </LabelContainer>
        <Button type="submit">Send Message</Button>
      </form >
    </>
  )
}

export default ContactForm;
