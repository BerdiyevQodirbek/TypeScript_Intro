import React, { useEffect } from 'react'
import Header from './components/header'
import Nav from './components/nav'
import Main from './components/main'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { useSelector } from "react-redux"
import './App.css';

function App() {
  const auth = useSelector(store => store.auth || {})

  return (
    <Router>
      <Switch>
        {
          auth.tooken
            ? routers.WhiteList.map(item => (
              <Route
                key={item.title}
                path={item.path}
                exact={item.exact}

              >
                {item.component}
              </Route>
            ))
            : routers.BlackLIst.map(item => (
              <Route
                key={item.title}
                path={item.path}
                exact={item.exact}

              >
                {item.component}
              </Route>
            ))
        }
        <Header />
        <Nav />
        <Main />
      </Switch>
    </Router >
  );
}

export default App;
