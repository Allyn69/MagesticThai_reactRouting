import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/About'
import Menu from './components/Menu'
import Contact from './components/Findus'
import BaseLayout from './components/Layout'

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
//IMPORT COMPONENTS

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route path='/menu' component={Menu}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/' component={Home}/>
    </Switch>
  </BaseLayout>
</BrowserRouter>
,
document.getElementById('root'));

registerServiceWorker();
