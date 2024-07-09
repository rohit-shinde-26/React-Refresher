import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import SampleForm from "./Component/SampleForm";
import CountAsync from "./Component/CountAsync";
import ReactCarList from "./Component/ReactCarList";

function App() {
  return (
    <>
      {/* <SampleForm /> */}
      {/* <CountAsync /> */}
      <ReactCarList />
    </>
  );
}

export default App;
