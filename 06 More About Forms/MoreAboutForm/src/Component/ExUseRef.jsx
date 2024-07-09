import React from "react";
import { useRef } from "react";

function ExUseRef() {
  // it does not re-render component
  //   const name = useRef("Ram");
  //   function handleChange() {
  //     name.current = "Sham";
  //     console.log(name);
  //   }
  // you can add string,number,array,object
  // you can also access and change html elements
  const h1Ref = useRef();
  function changeBtn() {
    let myBtn = h1Ref.current;
    myBtn.style.background = "red";
    myBtn.style.color = "blue";
  }
  return (
    <div>
      {/* <h1>{name.current}</h1>
      <button onClick={handleChange}>change name</button> */}

      <h1 ref={h1Ref}>Hello Brother</h1>
      <button onClick={changeBtn}>Change </button>
    </div>
  );
}

export default ExUseRef;
