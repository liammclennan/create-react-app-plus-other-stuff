import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import aboutPage from './pages/AboutPage';
import './index.css';
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import { browserHistory } from 'react-router'
import { createStore, combineReducers } from 'redux'
import 'bootstrap/dist/css/bootstrap.css';

let store = createStore(combineReducers({about: aboutPage.reducer}));
let routes =  <Route path="/" component={Layout}>
                {[aboutPage].map(page => 
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
