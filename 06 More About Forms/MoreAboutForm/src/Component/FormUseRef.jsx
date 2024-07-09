import React, { useRef } from "react";

function FormUseRef() {
  const unameRef = useRef();
  const passRef = useRef();
  function handleChange(e) {
    e.preventDefault();
    const myUname = unameRef.current.value;
    console.log("username", myUname);
    const myPass = passRef.current.value;
    console.log("password", myPass);
  }
  return (
    <div>
      <form>
        <label htmlFor="username">Username : </label>
        <br />
        <input type="text" id="username" ref={unameRef} />
        <br />
        <label htmlFor="password">password : </label>
        <br />
        <input type="password" id="password" ref={passRef} />
        <br />
        <br />
        <button type="submit" onClick={handleChange}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormUseRef;
