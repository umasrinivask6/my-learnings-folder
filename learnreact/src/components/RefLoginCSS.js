import React, { useRef } from 'react';

function RefLoginForm() {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      displayErrors(validationErrors);
      return;
    }

    // Perform login logic or API call here
    console.log('Email:', emailRef.current.value);
    console.log('Password:', passwordRef.current.value);

    // Reset form fields and errors
    formRef.current.reset();
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!emailRef.current.value) {
      validationErrors.email = 'Email is required';
    }

    if (!passwordRef.current.value) {
      validationErrors.password = 'Password is required';
    }

    return validationErrors;
  };

  const displayErrors = (errors) => {
    // Display errors in your desired way (e.g., showing error messages)
    console.log(errors);
  };

  return (
    <form className="form" ref={formRef} onSubmit={handleSubmit}>
      <div className='child'>
        <label>Email:</label>
        <input type="email" ref={emailRef} placeholder='email' autoFocus/>
      </div>
      <div className="child">
        <label>Password:</label>
        <input type="password" placeholder='password' ref={passwordRef} />
      </div>
      <button type="submit" className='btn'>Login</button>
    </form>
  );
}

export default RefLoginForm;
