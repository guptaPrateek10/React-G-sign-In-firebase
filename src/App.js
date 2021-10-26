import "./App.css";
import SignIn from "./SignIn";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import { firebase } from "./Firebase/firebase";
function App() {
  const [isUserLoggedIn, setisUserLoggedIn] = useState(true);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setisUserLoggedIn(true);
    }
    setisUserLoggedIn(false);
  });
  if (isUserLoggedIn) {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />;
        </Switch>
      </Router>
    );
  }
  return (
    <Router>
      <Switch>
        <Route path="/" component={SignIn} />;
      </Switch>
    </Router>
  );
}

export default App;
