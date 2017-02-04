import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import aboutPage from './pages/AboutPage';
import loginPage from './pages/LoginPage';
import './index.css';
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import Router from 'react-router/lib/Router'
import Link from 'react-router/lib/Link'
import { browserHistory } from 'react-router'
import { createStore, combineReducers } from 'redux'
import 'bootstrap/dist/css/bootstrap.css';

let store = createStore(combineReducers({about: aboutPage.reducer, login: loginPage.reducer}));

let routes =  <Route path="/" component={Layout}>
                <IndexRoute component={Home}/>
                {[aboutPage,loginPage].map(page => 
                  <Route key={page.route} path={page.route} component={page.pageFactory(store, page.sideEffects)} />
                )}                
              </Route>;

function render() {
  return ReactDOM.render((
    <Router history={browserHistory} >
      {routes}
    </Router>
  ), document.getElementById('root'))
}

store.subscribe(render);
render();

function Home(props) {
  return <div><h1>Home</h1>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </div>;
}
