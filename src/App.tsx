import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import About from './pages/About';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="main">
          <div className="container">
            <Header/>
            <Switch>
              <Route path="/" exact>
                <Main/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
