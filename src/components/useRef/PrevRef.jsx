import { useState, useEffect, useRef } from "react";

export default function PrevRef() {
  const [inputValue, setInputValue] = useState("");
  const prevInputValue = useRef("");

  useEffect(() => {
    prevInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <br />
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current value: {inputValue}</h2>
      <h2>Previous value: {prevInputValue.current}</h2>
    </>
  );
}
