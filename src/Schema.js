export const schema = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.trim().length < 1) {
    errors.name = "Enter Name";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.trim().length < 1) {
    errors.phone = "Enter Phone Number";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.trim().length < 1) {
    errors.message = "Enter Message";
  }

  return errors;
};
