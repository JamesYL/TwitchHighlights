import Home from "./components/home/Home";
import "fontsource-roboto";
import { Switch, Route } from "react-router-dom";
import AnalyzeVod from "./components/analysis/AnalyzeVod";
import { StylesProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Bookmark from "./components/bookmarks/Bookmark";
import Releases from "./components/releases";
const App = () => {
  return (
    <>
      <CssBaseline />
      <StylesProvider injectFirst>
        <Switch>
          <Route path="/releases">
            <Releases />
          </Route>
          <Route path="/search/:vodID">
            <AnalyzeVod />
          </Route>
          <Route path="/bookmarks">
            <Bookmark />
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
