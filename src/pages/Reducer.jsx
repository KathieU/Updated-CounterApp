import React, { useReducer } from "react";
import CounterView from "../shared-components/CounterView";
import useInput from "../hooks/useInput";
import { Helmet } from "react-helmet-async";

const initialState = 0;

const DECREMENT = "DECREMENT";
const INCREMENT = "INCREMENT";
const RESET = "RESET";
const SET_VALUE = "SET_VALUE";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return ++state;
    case DECREMENT:
      return --state;
    case RESET:
      return (state = 0);
    case SET_VALUE:
      return (state = action.value);
    default:
      return state;
  }
};

const Reducer = () => {
  const [counter, dispatch] = useReducer(reducerFunction, initialState);
  const { inputValue, onChangeOfInput, resetInputValue } = useInput();

  const reset = () => {
    dispatch({ type: RESET });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  const increment = () => {
    dispatch({ type: INCREMENT });
  };

  const setValue = (value) => {
    dispatch({ type: SET_VALUE, value });
  };

  return (
    <div>
      <Helmet>
        <title>useReducer Counter</title>
        <meta name="description" content="This is a counter created with react useReducer hook" />
        <link rel="canonical" href="/reducer" />
      </Helmet>
      <CounterView
        location="/customhook"
        page="Custom Counter"
        name="useReducer Counter"
        counter={counter}
        resetCounter={reset}
        decreaseCounter={decrement}
        increaseCounter={increment}
        setNewValueToCounter={setValue}
        formInputValue={inputValue}
        onChangeInputValue={onChangeOfInput}
        resetInputValue={resetInputValue}
      />
    </div>
  );
};

export default Reducer;
