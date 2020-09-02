import React from 'react';
import { Router } from "@reach/router";
import "./assets/css/style.css"

import Home from './components/pages/Home';


function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default App;
