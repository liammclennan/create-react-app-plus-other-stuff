import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import {AboutPageFactory} from './AboutPage';
import './index.css';
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import { browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory} >
    <Route path="/" component={Layout}>
      <Route path="about" component={AboutPageFactory({})} />
    </Route>
  </Router>
), document.getElementById('root'));