import { useEffect, useState } from "react";

function FetchDataExample() {
  const [count, setCount] = useState(0);
  console.log("outer useEffect");
  useEffect(() => {
    console.log("inside useEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default FetchDataExample;
