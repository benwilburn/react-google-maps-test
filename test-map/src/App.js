import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import InteractiveMap from './views/InteractiveMap';
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path='/interactive_map' component={InteractiveMap}/>
          <Redirect from='/' to='/interactive_map'/>
        </Switch>
      </Router>
    );
  }
}

export default App;
