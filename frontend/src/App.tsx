import React from "react";
import Home from "./components/Home";
import "fontsource-roboto";
import { Switch, Route } from "react-router-dom";
import AnalyzeVod from "./components/AnalyzeVod";

const App = () => {
  return (
    <>
      <Home />
      <Switch>
        <Route path="/search/:vodID">
          <AnalyzeVod />
        </Route>
      </Switch>
    </>
  );
};

export default App;
