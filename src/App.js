import React from 'react';
import './App.css';
import Login from './login/login';
import Signup from './signup/signup';
import Notfound from './common/notFoundComponent/notfound';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'



class App extends React.Component {
  auth(nextstate,replace) {
    console.log("nextstate,replace",nextstate,replace);
    if (true) {
      replace({
        pathName: '/signup'
      })
    }
  }
  render() {
    return (
      <div className="main">
        <header>Welcome Damini</header>
        <div className="switch-routes">
          <Router>
            <Switch>
              <Route path="/" exact strict component={Login} onEnter={auth}></Route>
              <Route path="/signup" exact strict component={Signup}></Route>
              <Route component={Notfound}></Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
export default App;
