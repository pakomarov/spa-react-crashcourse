import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="main">
        <div className="container">
          <Header/>
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/">
              <Main/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
