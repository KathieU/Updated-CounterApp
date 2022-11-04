import { useState } from "react";

const useInput = () => {
  const [inputValue, setInputValue] = useState(0);

  const onChangeOfInput = (event) => {
    setInputValue(() => event.target.value);
  };

  const resetInputValue = () => {
    setInputValue(0);
  };

  return {
    inputValue,
    onChangeOfInput,
    resetInputValue
  };
};

export default useInput;
