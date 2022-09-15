import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main"
import { useState } from "react";

const App = () => {

  const [phValue, setPhValue] = useState("6");
  const [abvValue, setAbvValue] = useState("100");

  const getPhSliderValue = (e) => {
    setPhValue(e.target.value)};

  const getAbvSliderValue = (e) => {
    setAbvValue(e.target.value)};

  return (
    <div className="app">
      <Nav getPhSliderValue={getPhSliderValue} phValue={phValue} getAbvSliderValue={getAbvSliderValue} abvValue={abvValue}/>
      <Main phValue={phValue} abvValue={abvValue}/>
    </div>
  )
}

export default App