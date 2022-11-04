import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((intiialValue) => ++intiialValue);
  };

  const decrement = () => {
    setCounter((intiialValue) =>
      intiialValue === 0 ? intiialValue : --intiialValue
    );
  };

  const setNewValue = (value) => {
    setCounter(() => value);
  };

  const reset = () => {
    setCounter((intiialValue) => 0);
  };

  return { increment, decrement, setNewValue, reset, counter };
};

export default useCounter;
