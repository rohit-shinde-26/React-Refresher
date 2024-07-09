import React, { useState } from "react";

function SampleForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const [fullname, setFullname] = useState("");
  const fullname = username + " " + password;

  return (
    <>
      <h1>Login Form</h1>
      <form>
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            // setFullname(e.target.value + " " + password);
          }}
        />
        <br />
        <label htmlFor="password">password :</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            // setFullname(username + " " + e.target.value);
          }}
        />
      </form>
      <div>
        <h2>Login Details</h2>
        <h3>Username : {username}</h3>
        <h3>password : {password}</h3>
        {/* <h3>fullname : {fullname}</h3> */}
        <h3>Full Detail : {fullname}</h3>
      </div>
    </>
  );
}

export default SampleForm;
