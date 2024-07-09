import React, { useState } from "react";

function HandleMultipleInput() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [userName, setUserName] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmPass, setConfirmPass] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [address, setAddress] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPass: "",
    email: "",
    address: "",
  });
  const {
    firstName,
    lastName,
    userName,
    password,
    confirmPass,
    email,
    address,
  } = formData;
  function handleChange(e) {
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  }
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} style={{ padding: "2rem" }}>
        <div className="myInput">
          <label htmlFor="firstName">First Name :</label>
          <br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className="myInput">
          <label htmlFor="lastName">Last Name :</label>
          <br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div className="myInput">
          <label htmlFor="userName">User Name :</label>
          <br />
          <input
            type="text"
            name="userName"
            id="userName"
            value={userName}
            onChange={handleChange}
          />
        </div>
        <div className="myInput">
          <label htmlFor="password">Password :</label>
          <br />
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="myInput">
          <label htmlFor="confirmPass">Confirm Password :</label>
          <br />
          <input
            type="text"
            name="confirmPass"
            id="confirmPass"
            value={confirmPass}
            onChange={handleChange}
          />
        </div>
        <div className="myInput">
          <label htmlFor="email">Email :</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="myInput">
          <label htmlFor="address">Address :</label>
          <br />
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          value="submit"
          style={{
            padding: "5px",
            margin: "5px",
            background: "green",
            border: "1px solid red",
          }}
        />
      </form>
    </div>
  );
}

export default HandleMultipleInput;
