import { useState } from "react";

export default function Color() {
  const [color, setColor] = useState('blue');
  return (
    <>
      <h1>My favorite color is {color}</h1>
      <button onClick={() => setColor("blue")}>blue</button>
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("pink")}>pink</button>
      <button onClick={() => setColor("green")}>green</button>
    </>
  );
}
