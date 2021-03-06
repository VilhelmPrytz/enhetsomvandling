import React from "react";
import "./App.css";

import IndexPage from "./components/pages/Index";
import LengthPage from "./components/pages/Length";
import AreaPage from "./components/pages/Area";
import VolumePage from "./components/pages/Volume";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route path="/length">
            <LengthPage />
          </Route>
          <Route path="/area">
            <AreaPage />
          </Route>
          <Route path="/volume">
            <VolumePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
