import React from "react";
import CounterView from "../shared-components/CounterView";
import useCounter from "../hooks/useCounter";
import useInput from "../hooks/useInput";
import { Helmet } from "react-helmet-async";


const CustomHook = () => {
  const { increment, decrement, setNewValue, reset, counter } = useCounter();
  const { inputValue, onChangeOfInput, resetInputValue } = useInput();

  return (
    <div>
      <Helmet>
        <title>Custom Counter</title>
        <meta name="description" content="This is a counter created with a react custom hook" />
        <link rel="canonical" href="/customhook" />
      </Helmet>

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
    </div>
  );
};

export default CustomHook;
