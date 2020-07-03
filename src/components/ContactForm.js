import React from "react";
import { useInput } from "../hooks/input-hook";

// modified source code from https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
function ContactForm(props) {
  const { value: name, bind: bindName, resetName } = useInput('');
  const { value: email, bind: bindEmail, resetEmail } = useInput('');
  const { value: message, bind: bindMessage, resetMessage } = useInput('');

  const handleSubmit = () => {
    resetName();
    resetEmail();
    resetMessage();
  }

  return (
    <form method="post" onSubmit={handleSubmit} netlify-honeypot="bot-field" data-netlify="true" name="contact">
      <input type="hidden" name="bot-field" aria-label="Netlify hidden input to handle submit" />
      <input type="hidden" name="form-name" value="contact" aria-label="Netlify hidden input to handle submit" />
      <label htmlFor="name">
        Name
        <input type="text" name="name" id="name" {...bindName} aria-label="Enter Name Field" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" name="email" id="email" {...bindEmail} aria-label="Enter Email Field" />
      </label>
      <label htmlFor="message">
        Message
        {/* <input type="text" {...bindMessage} /> */}
        <textarea name="message" id="message" rows="5" {...bindMessage} aria-label="Enter Message Field" />
      </label>
      <input type="submit" value="Send Message" aria-label="Submit button" />
    </form>
  )
}

export default ContactForm;