import React from "react";
import CounterView from "../shared-components/CounterView";
import useCounter from "../shared-components/useCounter";
import useInput from "../shared-components/useInput";


const CustomHook = () => {
  const { increment, decrement, setNewValue, reset, counter } = useCounter();
  const { inputValue, onChangeOfInput, resetInputValue } = useInput();

  return (
    <CounterView
      name="Custom Hook"
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
