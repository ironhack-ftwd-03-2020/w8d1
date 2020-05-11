import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route } from 'react-router-dom';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Route
        exact path='/projects'
        component={Projects}
      />
    </div>
  );
}

export default App;
