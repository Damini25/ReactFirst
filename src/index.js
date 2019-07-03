import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './login/login'
import SignUP from './signup/signup'
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routes = (<Router>
    <div>
        <Route path="/" component={App}></Route>
        {/* <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={SignUP}></Route> */}
    </div>
</Router>);

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
