import React from 'react';
import Content from './content/index';
import NotFound from './content/NotFound/index'
import Test from './content/test/index'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/search" component={Content}/>
        <Route path="/search/test" component={Test}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
} 

export default App;