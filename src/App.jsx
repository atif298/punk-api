import "./App.scss";
import Nav from "./containers/Nav/Nav.jsx";
import Main from "./containers/Main/Main.jsx";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [phValue, setPhValue] = useState("6");
  const [abvValue, setAbvValue] = useState("100");
  const [firstBrewedValue, setFirstBrewedValue] = useState("2015");

  const getSearchBoxValue = (event) => {
    setSearchTerm(event.target.value);
  };

  const getPhSliderValue = (e) => {
    setPhValue(e.target.value);
  };

  const getAbvSliderValue = (e) => {
    setAbvValue(e.target.value);
  };

  const getFirstBrewedSliderValue = (e) => {
    setFirstBrewedValue(e.target.value);
  };

  return (
    <div className="app">
      <Nav className="nav"
        getSearchBoxValue={getSearchBoxValue}
        getPhSliderValue={getPhSliderValue}
        phValue={phValue}
        getAbvSliderValue={getAbvSliderValue}
        abvValue={abvValue}
        getFirstBrewedSliderValue={getFirstBrewedSliderValue}
        firstBrewedValue={firstBrewedValue}
      />
      <Main className="main"
        searchTerm={searchTerm}
        phValue={phValue}
        abvValue={abvValue}
        firstBrewedValue={firstBrewedValue}
      />
    </div>
  );
};

export default App;
