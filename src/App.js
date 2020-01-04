import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UploaderImage from "./components/UploaderImage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <UploaderImage />
    </div>
  );
}

export default App;
