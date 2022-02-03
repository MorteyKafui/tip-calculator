import { useState } from 'react';
import Dashboard from './Dashboard';
import './Form.css';

const tipValue = ['10%', '15%', '20%', '25%', '50%', 'Custom'];

const Form = () => {
  const [amount, setAmount] = useState('0.00');
  const [numOfPeople, setNumOfPeople] = useState('0.0');
  const [result, setResult] = useState('0.00');

  const handleChange = e => {
    setAmount(e.target.value);
  };

  const handleUserChange = e => {
    setNumOfPeople(e.target.value);
  };

  const handleClick = val => {
    setResult((val / 100) * amount * numOfPeople);
  };

  const reset = () => {
    setAmount('0.00');
    setNumOfPeople('0.0');
    setResult('0.00');
  };

  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className='part-one'>
        <div>
          <label htmlFor='bill'>Bill</label>
          <img src='/images/icon-dollar.svg' alt='' />
          <input
            type='number'
            name='bill'
            id='bill'
            value={amount}
            onChange={handleChange}
          />
        </div>
        <div className='btn'>
          <label htmlFor='btn'>Select Tip %</label>
          <div className='btn-group'>
            {tipValue.map(btn => (
              <button
                onClick={() => {
                  const num = Number(btn.replace('%', ''));
                  handleClick(num);
                }}
                key={btn}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
        <div className='user-num'>
          <label htmlFor='users'>Number of People</label>
          <img src='/images/icon-person.svg' alt='avatar' />
          <input
            type='number'
            name='users'
            id='users'
            value={numOfPeople}
            onChange={handleUserChange}
          />
        </div>
      </div>

      <Dashboard result={result} reset={reset} />
    </form>
  );
};

export default Form;
