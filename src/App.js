import React from 'react';
import Content from './content/result/index';
import NotFound from './content/component/NotFound/index'
import Main from './content/main/index'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

// IE11의 경우
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/search-en" component={Main}/>
        <Route path="/search-en/result" component={Content}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
} 

export default App;