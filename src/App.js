import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
