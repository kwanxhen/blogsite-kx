import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import React pages
import Home from "./pages/Home";
import About from "./pages/About";
import Post1Page from "./pages/fullPostPage/Post1Page"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/post1" component={Post1Page} />
      </Switch>
    </Router>
  );
}

export default App;
