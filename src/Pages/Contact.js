import styled from "styled-components";
import { schema } from "../Schema";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { useRef } from "react";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: " ",
      email: " ",
      message: " ",
      phone: " ",
    },
    validate: schema,
    onSubmit: (values) => {
      console.log(values);
      sendEmail();
    },
  });

  return (
    <Style>
      <form ref={form} onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            name="name"
            placeholder="Damilola Akanbi"
            onChange={handleChange}
            value={values.name}
          />
          {errors.name && <ErrorText>{errors.name}</ErrorText>}
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder="damilolaakanbi@gmail.com"
            onChange={handleChange}
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
        </div>
        <div>
          <label>Phone Number: </label>
          <input
            name="phone"
            value={values.phone}
            Placeholder="+44"
            onChange={handleChange}
          />
          {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
        </div>
        <div>
          <label>Message: </label>
          <textarea
            name="message"
            rows="10"
            placeholder="What can we do for you ?"
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <ErrorText>{errors.message}</ErrorText>}
        </div>
        <div className="d-flex justify-content-center">
          <input type="submit" value="Send" />
        </div>
      </form>
    </Style>
  );
};

export default ContactUs;

const Style = styled.div`
  width: 100%;
  position: relative;
  z-index: 300;
  display: flex;
  justify-content: center;
  padding-top: 130px;

  form {
    padding: 30px;
    margin-bottom: 130px;
    width: 40%;

    border-radius: 25px;
    box-shadow: 0px 8px 16px rgba(205, 218, 240, 0.79);

    @media (max-width: 850px) {
      width: 80%;
    }
    div {
      margin-bottom: 20px;
    }
    label {
      font-weight: 700;
      font-size: 16px;
      line-height: 30px;
      letter-spacing: 0.0005em;
      color: #6b323c;
      margin-bottom: 10px;
    }
    input {
      outline: none;
      height: 40px;
      border: 2px solid #6b323c;
      border-radius: 10px;
      width: 100%;
      padding-left: 10px;
    }

    textarea {
      border: 2px solid #6b323c;
      border-radius: 5px;
      width: 100%;
      outline: none;
      padding-left: 10px;
    }

    input[value="Send"] {
      border: none;
      border-radius: 5px;
      width: 160px;
      height: 50px;
      font-size: 20px;
      color: aliceblue;
      background-color: #492128;
    }
  }
`;

const ErrorText = styled.p`
  color: #b60000;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 0;
`;
