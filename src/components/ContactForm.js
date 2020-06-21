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
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label>
        Name
        <input type="text" name="name" id="name"{...bindName} />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email"{...bindEmail} />
      </label>
      <label>
        Message
        {/* <input type="text" {...bindMessage} /> */}
        <textarea name="message" id="message" rows="5" {...bindMessage} />
      </label>
      <input type="submit" value="Send Message" />
    </form>
  )
}

export default ContactForm;