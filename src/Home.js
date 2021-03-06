import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { firebase } from "./Firebase/firebase";
const Home = () => {
  const signOut = () => {
    firebase.auth().signOut();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={signOut}> Sign Out</button>
      </header>
    </div>
  );
};
export default Home;
