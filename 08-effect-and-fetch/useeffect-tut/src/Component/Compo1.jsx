import { useEffect, useState } from "react";
function Compo1() {
  useEffect(() => {
    console.log("Inside useEffect");
  }, []);
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>hello</h1>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Compo1;
