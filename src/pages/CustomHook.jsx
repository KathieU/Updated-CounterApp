import React from "react";
import CounterView from "../shared-components/CounterView";
import useCounter from "../hooks/useCounter";
import useInput from "../hooks/useInput";


const CustomHook = () => {
  const { increment, decrement, setNewValue, reset, counter } = useCounter();
  const { inputValue, onChangeOfInput, resetInputValue } = useInput();

  return (
    <CounterView
      location="/reducer"
      page="useReducer Counter"
      name="Custom Counter"
      counter={counter}
      increaseCounter={increment}
      decreaseCounter={decrement}
      resetCounter={reset}
      setNewValueToCounter={setNewValue}
      onChangeInputValue={onChangeOfInput}
      formInputValue={inputValue}
      resetInputValue={resetInputValue}
    />
  );
};

export default CustomHook;
