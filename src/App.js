import React from "react";
import logo from "./logo.svg";
import DynamicForm from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Learn React
        <div>Main section</div>
        <DynamicForm />
      </div>
    </div>
  );
}

export default App;
