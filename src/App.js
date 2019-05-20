import React from "react";
import DynamicForm from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-main">
        Learn React
        <div>Main section</div>
        <DynamicForm />
      </div>
    </div>
  );
}

export default App;
