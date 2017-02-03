import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import { AboutPageFactory, AboutReducer, aboutSideEffectsFactory } from './AboutPage';
import './index.css';
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import { browserHistory } from 'react-router'
import { createStore } from 'redux'

let store = createStore(AboutReducer);
let routes =  <Route path="/" component={Layout}>
                <Route path="about" component={AboutPageFactory(store, aboutSideEffectsFactory(store))} />
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
