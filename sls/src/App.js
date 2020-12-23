import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Socials from "./components/Socials";
import { Affix } from 'antd';

import './App.css';

function App() {


  return (
    <div className="App">
      <Header />
      <Content />
      <Socials />
    </div>
  );
}

export default App;
