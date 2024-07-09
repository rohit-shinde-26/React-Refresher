import React, { useState } from "react";
import TopCar from "./TopCar";

function ReactCarList() {
  const [cars, setCars] = useState([
    { id: 1, name: "Lambo", color: "Red" },
    { id: 2, name: "Supra", color: "Blue" },
    { id: 3, name: "Dodge", color: "Black" },
    { id: 4, name: "Porsche", color: "White" },
  ]);

  function handleName() {
    const newCar = {
      id: crypto.randomUUID(),
      name: "Ferrari",
    };
    setCars((prevState) => [...prevState, newCar]);
  }

  return (
    <ul>
      {cars.map((car) => (
        <TopCar name={car.name} key={car.id} />
      ))}
      <button onClick={handleName}>ADD CAR</button>
    </ul>
  );
}

export default ReactCarList;
