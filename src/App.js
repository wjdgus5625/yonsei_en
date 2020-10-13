import React from 'react';
import Content from './content/result/index';
import NotFound from './content/NotFound/index'
import Test from './content/test/index'
import Main from './content/main/index'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/search" component={Main}/>
        <Route path="/search/result" component={Content}/>
        <Route path="/search/test" component={Test}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
} 

export default App;