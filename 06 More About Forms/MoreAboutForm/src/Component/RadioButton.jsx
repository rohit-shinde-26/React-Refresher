import React, { useState } from "react";

function RadioButton() {
  const [gender, setGender] = useState("male");
  return (
    <div>
      <form>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="male"
          checked={gender === "male"}
          onChange={() => {
            setGender("male");
          }}
        />
        <br />
        <label htmlFor="female">female</label>
        <input
          type="radio"
          id="female"
          checked={gender === "female"}
          onChange={() => {
            setGender("female");
          }}
        />
        <br />
      </form>
    </div>
  );
}

export default RadioButton;
