import React, { useMemo, useState } from 'react';

function LoginForm() {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [errors, setErrors] = useState({});
  const [Bmi, setBmi] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form fields
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const bmi = calculateBmi()
    setBmi(bmi)
    reset()
  };

  const calculateBmi = ()=>{
    const h = Number(height) 
    const w = Number(weight)
    return (w/(h**2))*10000
  }

  const validateForm = () => {
    let validationErrors = {};

    if (!name) {
      validationErrors.name = 'Name is required';
    }
    console.log(height)
    if (!height || isNaN(Number(height))) {
      validationErrors.height = 'height is invalid';
    }

    if (!weight || isNaN(Number(weight))) {
      validationErrors.weight = 'weight is invalid';
    }

    return validationErrors;
  };


  const reset = () =>{
    setName('')
    setHeight('')
    setWeight('')
    setErrors({})
  }

  return (
    <div>
    <form className="form" onSubmit={handleSubmit}>
      <div className="child">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          className= {errors.name?"error":''}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className='child'>
        <label>Weight:</label>
        <input
          type='text'
          placeholder='(kgs)'
          value={weight}
          onChange={(e)=>{console.log(e.target.value);setWeight(e.target.value)}}
          className={errors.weight?'error':''}
        />
        <div className='error-text'>{errors.weight?errors.weight:null}</div>
      </div>
      <div className='child'>
        <label>height:</label>
        <input
          type='text'
          placeholder='(cm)'
          value={height}
          onChange={(e)=>{setHeight(e.target.value)}}
          className={errors.height?'error':''}
        />
        <div className='error-text'>{errors.height?errors.height:null}</div>
      </div>
      <button className='btn' type="submit">Calculate Bmi</button>
    </form>
      <button className='btn' onClick={reset}>Reset</button>
      <div>{Bmi?`Bmi of ${name}: ${Bmi}`:null }</div>
      </div>
  );
}

export default LoginForm;
