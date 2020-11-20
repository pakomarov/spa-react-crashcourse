import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import About from './pages/About';

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
