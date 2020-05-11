import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route } from 'react-router-dom';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import ProjectDetails from './components/ProjectDetails';
import TaskDetails from './components/TaskDetails';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Route
        exact path='/projects'
        component={Projects}
      />
      <Route
        exact path='/projects/:id'
        component={ProjectDetails}
      />
      <Route
        exact path='/tasks/:id'
        component={TaskDetails}
      />
    </div>
  );
}

export default App;
