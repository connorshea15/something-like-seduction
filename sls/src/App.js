import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Content from "./components/Content";
import { Affix } from 'antd';

import './App.css';

function App() {


  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
