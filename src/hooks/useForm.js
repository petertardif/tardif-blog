import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));
      setValues("");
    }
  }, [errors]);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    // fetch("/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contact", ...values })
    // })
    //   .then(() => alert("Success!"))
    //   .catch(error => alert(error));
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;