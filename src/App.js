import React from 'react';
import Search from './content/index';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Search}/>
    </Router>
  );
} 

export default App;