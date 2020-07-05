export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Name is required.'
  } else if (values.name.trim().length === 0) {
    errors.name = 'Name cannot be spaces only.'
  }
  if (!values.email) {
    errors.email = 'Email is required.'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid!'
  }
  if (!values.message) {
    errors.message = 'Message is required.'
  } else if (values.message.trim().length === 0) {
    errors.message = 'Message cannot be spaces only.'
  }

  return errors;
};