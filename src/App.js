import React, {} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
// import useFetch from './useFetch';
import Bret from './components/Bret';

export default function App() {
 
  return (
    <Router>
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route path="/Bret" 
          // render={ (props) => {
                // return  <UserDetails {...props} /> 
          // }} 
          component={Bret}
          // match = {match}
          />
        </Switch>
      </Router>
  )
}
