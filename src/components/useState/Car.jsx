import { useState } from "react";

export default function Car() {
  const [car, setCar] = useState({
    brand: "ford",
    model: "mustang",
    year: 1964,
    color: "red",
  });
  // const updateColor = () => {
  //     setCar(prevState => {
  //         return{...prevState, color:'blue'}
  //     })
  // }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year} {car.named && <span>named: {car.named}</span>}
      </p>
      <button
        onClick={() => {
          setCar({ ...car, color: "black", named: "Bib Boss" });
        }}
      >
        Black
      </button>
    </>
  );
}
