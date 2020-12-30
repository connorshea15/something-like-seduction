import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Music from "./components/Music";
import Luna from "./components/Luna";
import Socials from "./components/Socials";
import { Affix } from 'antd';

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/luna" component={Luna} />
        </Switch>
        <Socials />
      </Router>
    </div>
  );
}

export default App;
