import React, { useState } from "react";
import ShowCountValue from "./ShowCountValue";

function CountAsync() {
  const [count, setCount] = useState(0);
  function HandleClick() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // console.log(count);

    // setCount((prevState) => {
    //   return prevState + 1;
    // });
    // setCount((prevState) => {
    //   return prevState + 1;
    // });
    setCount((prevState) => {
      return prevState + 1;
    });
  }
  return (
    <div>
      <h1>
        Count : <ShowCountValue count={count} />
      </h1>
      <button onClick={HandleClick}>Increase</button>
    </div>
  );
}

export default CountAsync;
