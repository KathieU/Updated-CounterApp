import React from "react";

const CounterView = ({
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
      <h1>{name}</h1>
      <p>{counter}</p>

      <button onClick={() => increaseCounter()}>Increment</button>
      <button onClick={() => decreaseCounter()}>Decrement</button>
      <button onClick={() => resetCounter()}>Reset</button>

      <form onSubmit={submit}>
        <input
          onChange={onChangeInputValue}
          type="number"
          value={formInputValue}
          placeholder="Enter new value"
        />
        <button type="submit">Set Value</button>
      </form>
    </div>
  );
};

export default CounterView;
