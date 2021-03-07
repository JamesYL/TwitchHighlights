import React from "react";
import Home from "./components/home/Home";
import "fontsource-roboto";
import { Switch, Route } from "react-router-dom";
import AnalyzeVod from "./components/analysis/AnalyzeVod";
import { StylesProvider } from "@material-ui/core/styles";
const App = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <Switch>
          <Route path="/search/:vodID">
            <AnalyzeVod />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </StylesProvider>
    </>
  );
};

export default App;
