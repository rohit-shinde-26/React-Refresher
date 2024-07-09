import { useState } from "react";

import "./App.css";
import RadioButton from "./Component/RadioButton";
import HandleMultipleInput from "./Component/HandleMultipleInput";
import ExUseRef from "./Component/ExUseRef";
import FormUseRef from "./Component/FormUseRef";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Radio buttons</h1> */}
      {/* <RadioButton /> */}
      {/* <HandleMultipleInput /> */}
      {/* <ExUseRef /> */}
      <FormUseRef />
    </>
  );
}

export default App;
