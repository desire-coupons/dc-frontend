import React from 'react';
import { Router } from "@reach/router";
import "./assets/css/style.css"

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';


function App() {
  return (
    <Router>
      <Home exact path="/" />
      <Contact exact path="/contact" />
    </Router>
  );
}

export default App;
