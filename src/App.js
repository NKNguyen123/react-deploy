import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Skills from './components/pages/Skills.js';
import Education from './components/pages/Education.js';
import Experience from './components/pages/Experience.js';
// import Projects from './components/pages/Projects.js';
import Contact from './components/pages/Contact.js';
import './css/Pages.css';

function App() {
  return (
    <Router>
      <Switch>
        <div class='App'>
        <Sidebar />
        <Route exact path='/' component={Home}/>
        <Route exact path='/Home' component={Home}/>
        <Route exact path='/About' component={About}/>
        <Route exact path='/Skills' component={Skills}/>
        <Route exact path='/Education' component={Education}/>
        <Route exact path='/Experience' component={Experience}/>
        {/*<Route exact path='/Projects' component={Projects}/>*/}
        <Route exact path='/Contact' component={Contact}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
