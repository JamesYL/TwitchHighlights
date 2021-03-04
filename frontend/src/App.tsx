import React from "react";
import Home from "./components/Home";
import "fontsource-roboto";
import { Switch, Route } from "react-router-dom";
import AnalyzeVod from "./components/analysis/AnalyzeVod";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/search/:vodID">
          <AnalyzeVod />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default App;
