import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { validateEmail } from "../../utils/helpers";
import AnimatePage from "../AnimatePage/AnimatePage";

const FORMSPARK_FORM_ID = "yCPi4Kpp";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ message });
    alert("Form submitted!");
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Your name is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <AnimatePage>
      <div className="columns">
        <div className="column m-4 is-half">
          <div className="content">
            <h2>Contact Me</h2>
            <p className="">
              If you'd like to reach out to me and discuss any projects, please
              fill out the contact form or email me directly below!
            </p>
            <button
              className="button is-info is-outlined"
              href="mailto:jason@notjson.com"
            >
              Email Me
            </button>
          </div>
        </div>
        <form
          id="contact-form"
          className="my-4 is-fluid m-4 column"
          onSubmit={onSubmit}
        >
          <div className="">
            <div className="field" action="https://submit-form.com/yCPi4Kpp">
              <label htmlFor="name" className="label">
                Name
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  defaultValue={name}
                  onBlur={handleChange}
                  required
                ></input>
              </div>
            </div>
            <div className="field">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  name="email"
                  defaultValue={email}
                  onBlur={handleChange}
                  required
                ></input>
              </div>
            </div>
            <div className="field">
              <label htmlFor="message" className="label">
                Message
              </label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  rows="5"
                  defaultValue={message}
                  onBlur={handleChange}
                ></textarea>
              </div>
            </div>
            {errorMessage && (
              <div>
                <p className="is-danger">{errorMessage}</p>
              </div>
            )}
            <button
              className="button is-danger"
              type="submit"
              disabled={submitting}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </AnimatePage>
  );
};

export default Contact;
