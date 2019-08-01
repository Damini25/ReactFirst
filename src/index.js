import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import CartReducer from './common/store/Reducers/cartReducer';
import FilterReducer from './common/store/Reducers/filterReducer';
import thunk from 'redux-thunk';
import axios from 'axios';

axios.defaults.headers.common['Authorization']='Auth_Token';
axios.interceptors.request.use((req) => {
    console.log('req',req);
    return req;
});
axios.interceptors.response.use((res) => {
    console.log('req',res);
    return res;
},error=>{
    Promise.reject(error);
});

const rootReducers = combineReducers({
    cartReducer: CartReducer,
    filterReducer: FilterReducer
})

const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log('mw1', action, store.getState())
            next(action);
        }
    }
}
const store = createStore(rootReducers, applyMiddleware(logger, thunk));

store.subscribe(() => {
    console.log('getState', store.getState());
})

const app = (
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>
);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
