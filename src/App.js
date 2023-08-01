
import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export default class App extends Component {
 
  render() {
    return (
      <div>
        <Router>
        <NavBar></NavBar>
        
        <Switch>
          <Route exact path="/"> <News key="1" country="in" category="general"></News> </Route>
          <Route exact path="/business"> <News key="2" country="in" category="business"></News> </Route>
          <Route exact path="/entertainment"> <News key="3" country="in" category="entertainment"></News> </Route>
          <Route exact path="/general"> <News key="4" country="general" category="general"></News> </Route>
          <Route exact path="/health"> <News key="5" country="health" category="health"></News> </Route>
          <Route exact path="/science"> <News key="6" country="science" category="science"></News> </Route>
          <Route exact path="/sports"> <News key="7" country="sports" category="sports"></News> </Route>
          <Route exact path="/technology"> <News key="8" country="technology" category="technology"></News> </Route>
                  
        </Switch>
        </Router>
      </div>
    )
  }
}


