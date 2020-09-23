import React from 'react';
import Content from './content/index';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/srh" component={Content}/>
    </Router>
  );
} 

export default App;