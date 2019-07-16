import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import rootReducers from './common/Reducers/mainReducer';

const store = createStore(rootReducers);

const routes = (<Router>
    <div>
        <Provider store={store}>
            <Route path="/" component={App}></Route>
            {/* <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={SignUP}></Route> */}
        </Provider>

    </div>
</Router>);

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
