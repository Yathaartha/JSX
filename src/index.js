// import the react and reactDOM elements
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  return <div>Hi there!</div>;
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
