import React, { useState } from 'react'
import { useFormspark } from '@formspark/use-formspark';
import { validateEmail } from '../../utils/helpers';

const FORMSPARK_FORM_ID = "yCPi4Kpp";

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  })
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ message })
    alert('Form submitted!')
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <form id='contact-form' className='container my-2' onSubmit={onSubmit}>
      <div className='columns'>
        <div className='column'>
          <div className="">
            <p className='title is-5'>
              Contact Me
            </p>
            <p className=''>If you'd like to reach out to me and discuss any projects, please fill out the contact form!</p>
          </div>
        </div>
        <div className='column'>
          <div className="field" action='https://submit-form.com/yCPi4Kpp'>
            <label htmlFor="name" className="label">Name</label>
            <div className="control">
            <input className="input" type="text" name='name' defaultValue={name} onBlur={handleChange} required></input>
            </div>
          </div>
          <div className="field">
            <label htmlFor='email' className="label">Email</label>
            <div className="control">
            <input className="input" type="email" name='email' defaultValue={email} onBlur={handleChange} required></input>
            </div>
          </div>
          <div className="field">
            <label htmlFor='message' className="label">Message</label>
            <div className="control">
              <textarea className='textarea' name='message' rows='5' defaultValue={message} onBlur={handleChange}></textarea>
            </div>
          </div>
          {errorMessage && (
            <div>
              <p className='is-danger'>{errorMessage}</p>
            </div>
          )}
          <button className='button is-black' type='submit' disabled={submitting}>Send</button>
        </div>
      </div>
    </form>


  )
}

export default Contact