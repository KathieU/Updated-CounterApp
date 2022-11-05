import React from "react";
import { Link } from "react-router-dom";

const CounterView = ({
  location,
  page,
  name,
  counter,
  increaseCounter,
  decreaseCounter,
  resetCounter,
  setNewValueToCounter,
  onChangeInputValue,
  formInputValue,
  resetInputValue
}) => {
  const submit = (e) => {
    e.preventDefault();
    setNewValueToCounter(formInputValue);
    resetInputValue();
  };

  return (
    <div>
      <header>
        <h1>CounterApp</h1>
        <nav className='counter-nav'>
        <Link to="/" className='counter-links'>Home</Link>
        <Link to={location} className='counter-links'>{page}</Link>
        </nav>
      </header>
      <div className='counter-body'>
        <h1>{name}</h1>

        <div className='counter-btns'>
            <button onClick={() => decreaseCounter()} className='left-button'>-</button>
            <p>{counter}</p>
            <button onClick={() => increaseCounter()} className='right-button'>+</button>
        </div>

        <form onSubmit={submit} className='counter-form'>
            <input
            onChange={onChangeInputValue}
            type="number"
            value={formInputValue}
            placeholder="Enter new value"
            />
            <button type="submit" className="submit-btn">Set Value</button>
        </form>

        <button onClick={() => resetCounter()} className='reset-btn'>Reset</button>
      </div>
    </div>
  );
};

export default CounterView;
